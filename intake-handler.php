<?php
// intake-handler.php — backend for the Marie Glow Studio post-purchase intake
// form (intake.html). Receives a POST and emails hello@marieglowstudio.com with
// only the fields the buyer actually filled in, in a readable order. An
// optional logo upload is validated (image type + size), saved under
// uploads/ with a random filename, and noted in the email — uploads/ is
// blocked from direct web access by its own .htaccess.

header('Content-Type: application/json');

function respond($ok, $error = null) {
    http_response_code($ok ? 200 : 400);
    echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// Honeypot: real visitors never see or fill this field.
if (!empty($_POST['hp_company_url'])) {
    respond(true);
}

// Cloudflare Turnstile (shared check in turnstile.php).
require_once __DIR__ . '/turnstile.php';
if (($turnstileError = turnstile_check('intake')) !== null) {
    respond(false, $turnstileError);
}

$serviceLabels = [
    'pinterest-audit' => 'Pinterest SEO Audit ($197)',
    'pinterest-account-setup' => 'Pinterest Account Setup ($497)',
    'pinterest-management' => 'Monthly Pinterest Management',
    'website-starter' => 'Website Starter ($249)',
    'complete-website-package' => 'Complete Website & Brand Identity ($1,497)',
    'website-seo-audit' => 'Website SEO Audit ($247)',
    'seo-foundations' => 'SEO Foundations Setup ($697)',
    'digital-strategy-roadmap' => 'Digital Strategy Roadmap ($397)',
];

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$business = trim($_POST['business'] ?? '');
$service = trim($_POST['service'] ?? '');

if ($name === '' || $email === '' || $business === '' || !isset($serviceLabels[$service])) {
    respond(false, 'Please fill in your name, email, business name, and which service you purchased.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "That email address doesn't look right.");
}

$name = str_replace(["\r", "\n"], '', $name);
$email = str_replace(["\r", "\n"], '', $email);

// Every optional field this form can send, across all eight services, in the
// order they should read in the email. A field missing from $_POST or left
// blank is simply skipped, so this list can be a superset of what's on the
// page at any given time without breaking anything.
$fieldLabels = [
    'website' => 'Current Website URL',
    'pinterest_profile_url' => 'Current Pinterest Account URL',
    // Pinterest SEO Audit
    'audit_access_granted' => 'Pinterest Access Granted',
    'audit_goal' => 'Audit Goal',
    // Pinterest Account Setup
    'setup_keywords' => 'Products or Services to Feature',
    'setup_brand_assets_link' => 'Brand Assets Link',
    // Monthly Pinterest Management
    'management_tier' => 'Management Tier',
    'management_brand_assets_link' => 'Brand Assets Link',
    'management_promote' => 'What to Promote First',
    // Website Starter
    'starter_photos_link' => 'Photos and Copy Link',
    'starter_business_info' => 'What They Offer and Main Action',
    // Complete Website & Brand Identity
    'complete_has_branding' => 'Has Existing Branding',
    'complete_domain_info' => 'Domain',
    'complete_photos_link' => 'Photos, Products or Services Link',
    // Website SEO Audit
    'seoaudit_found_for' => 'Wants to Be Found For',
    'seoaudit_service_area' => 'City or Service Area',
    'seoaudit_search_console' => 'Search Console Set Up',
    // SEO Foundations Setup
    'seofound_platform' => 'Website Platform',
    'seofound_service_area' => 'City or Service Area',
    'seofound_pages' => 'Pages That Matter Most',
    // Digital Strategy Roadmap
    'strategy_goal' => '90 Day Goal',
    'strategy_tools' => 'Tools Used Today',
    // Common closing field
    'message' => 'Anything Else',
];

function safe_logo_upload($fieldName) {
    if (!isset($_FILES[$fieldName]) || $_FILES[$fieldName]['error'] === UPLOAD_ERR_NO_FILE) {
        return null;
    }
    $file = $_FILES[$fieldName];
    if ($file['error'] !== UPLOAD_ERR_OK || $file['size'] > 5 * 1024 * 1024) {
        return null; // skip a failed or oversized upload rather than failing the whole submission
    }
    $allowed = ['image/png' => 'png', 'image/jpeg' => 'jpg', 'image/svg+xml' => 'svg', 'image/webp' => 'webp', 'image/gif' => 'gif'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    if (!isset($allowed[$mime])) {
        return null; // not a recognized image type, skip
    }
    $dir = __DIR__ . '/uploads';
    if (!is_dir($dir)) {
        mkdir($dir, 0750, true);
    }
    $htaccess = $dir . '/.htaccess';
    if (!file_exists($htaccess)) {
        file_put_contents($htaccess, "<IfModule mod_authz_core.c>\n    Require all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\n    Order deny,allow\n    Deny from all\n</IfModule>\n");
    }
    $safeName = bin2hex(random_bytes(8)) . '.' . $allowed[$mime];
    if (!move_uploaded_file($file['tmp_name'], $dir . '/' . $safeName)) {
        return null;
    }
    return $safeName;
}

$logoFile = safe_logo_upload('starter_logo_file');
if ($logoFile === null) {
    $logoFile = safe_logo_upload('complete_logo_file');
}

$to = 'hello@marieglowstudio.com';
$subject = 'New intake: ' . $serviceLabels[$service];

$body = "New Marie Glow Studio client intake.\n\n"
    . "Name: $name\n"
    . "Email: $email\n"
    . "Business Name: $business\n"
    . "Service Purchased: " . $serviceLabels[$service] . "\n";

foreach ($fieldLabels as $key => $label) {
    $value = trim($_POST[$key] ?? '');
    if ($value === '') continue;
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $body .= "$label: $value\n";
}

if ($logoFile !== null) {
    $body .= "Logo File: saved as uploads/$logoFile on the server (grab it via cPanel File Manager)\n";
}

$body .= "\n---\n"
    . 'Sent: ' . date('Y-m-d H:i:s') . "\n"
    . 'From IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$domain = preg_replace('/^www\./', '', $_SERVER['SERVER_NAME'] ?? 'marieglowstudio.com');
$fromAddress = 'noreply@' . $domain;

$headers = "From: Marie Glow Studio Intake Form <$fromAddress>\r\n"
    . "Reply-To: $name <$email>\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    respond(false, 'Something went wrong sending that, please try again in a little while.');
}

respond(true);
