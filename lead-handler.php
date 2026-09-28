<?php
// lead-handler.php — backend for the Marie Glow Studio landing-page enquiry form (go-*.html).
// Same pattern as contact-handler.php (PHP mail() to hello@marieglowstudio.com), plus the source and
// qualification details the landing pages collect. contact-handler.php is left untouched.
//
// A lead is QUALIFIED when it has a valid email, a business name, and a start timeline other than
// "just-researching". The same rule runs in assets/js/track.js for the qualified_lead GA4 event.

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

// Honeypot: real visitors never see or fill this field. Bots that fill every field trip it, and get a
// fake success so they do not learn to skip it.
if (!empty($_POST['hp_company_url'])) {
    respond(true);
}

// One-line, length-capped, header-safe text.
function clean($key, $max = 200) {
    $v = trim($_POST[$key] ?? '');
    $v = preg_replace('/[\x00-\x1F\x7F]+/', ' ', $v);
    return mb_substr($v, 0, $max);
}

$name = str_replace(['<', '>', '"'], '', clean('name', 120));
$email = clean('email', 200);
$business = clean('business', 200);
$website = clean('website', 300);
$stage = clean('stage', 200);
$timeline = clean('timeline', 40);
$offer = clean('offer', 80);
$page = clean('lp_page', 80);
$defaultSource = clean('default_source', 40);
$utm = [];
foreach (['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as $k) {
    $utm[$k] = clean($k, 100);
}
$referrer = clean('referrer', 300);
$landing = clean('landing_url', 300);
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $business === '') {
    respond(false, 'Please fill in your name, email and business name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "That email address doesn't look right.");
}
if (mb_strlen($message) > 5000) {
    respond(false, 'That message is too long, please trim it down.');
}

$source = $utm['utm_source'] !== '' ? $utm['utm_source'] : ($defaultSource !== '' ? $defaultSource . ' (assumed)' : 'direct');
$qualified = ($timeline !== '' && $timeline !== 'just-researching') ? 'QUALIFIED' : 'LEAD';

$to = 'hello@marieglowstudio.com';
$subject = "[$qualified] $offer via $source";

$body = "New enquiry from a marieglowstudio.com landing page.\n\n"
    . "Status: $qualified\n"
    . "Offer: $offer\n"
    . "Page: $page\n\n"
    . "Name: $name\n"
    . "Email: $email\n"
    . "Business Name: $business\n"
    . "Website URL: $website\n"
    . "Where they are: $stage\n"
    . "Wants to start: $timeline\n\n"
    . "Question:\n" . ($message !== '' ? $message : '(none)') . "\n\n"
    . "--- Source ---\n"
    . "utm_source: {$utm['utm_source']}\n"
    . "utm_medium: {$utm['utm_medium']}\n"
    . "utm_campaign: {$utm['utm_campaign']}\n"
    . "utm_content: {$utm['utm_content']}\n"
    . "utm_term: {$utm['utm_term']}\n"
    . "Referrer: $referrer\n"
    . "Landing URL: $landing\n\n"
    . '---' . "\n"
    . 'Sent: ' . date('Y-m-d H:i:s') . "\n"
    . 'From IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$domain = preg_replace('/^www\./', '', $_SERVER['SERVER_NAME'] ?? 'marieglowstudio.com');
$fromAddress = 'noreply@' . $domain;

$headers = "From: Marie Glow Studio Landing Pages <$fromAddress>\r\n"
    . "Reply-To: $name <$email>\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

if (!mail($to, $subject, $body, $headers)) {
    respond(false, 'Something went wrong sending that, please try again in a little while.');
}

respond(true);
