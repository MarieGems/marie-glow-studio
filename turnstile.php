<?php
// turnstile.php — shared Cloudflare Turnstile check for the Marie Glow Studio form handlers.
// Include it and call turnstile_check('action') after the honeypot and before any other work.
// Returns null when the visitor passes (or no secret is configured yet), or an error message string.
//
// The secret key lives outside the repo (TURNSTILE_SECRET env var, or a one-line turnstile-secret.txt in
// the account home folder, one or two levels above this file). With no secret configured, verification is
// skipped so the forms keep working until it is set up.

function turnstile_check($expectedAction, $allowedHosts = ['marieglowstudio.com', 'www.marieglowstudio.com']) {
    $secret = getenv('TURNSTILE_SECRET') ?: '';
    foreach ([__DIR__ . '/../turnstile-secret.txt', __DIR__ . '/../../turnstile-secret.txt'] as $file) {
        if ($secret === '' && is_readable($file)) {
            $secret = trim(file_get_contents($file));
        }
    }
    if ($secret === '') {
        return null;
    }

    $token = trim($_POST['cf-turnstile-response'] ?? '');
    if ($token === '' || strlen($token) > 2048) {
        return 'Please complete the spam check and try again.';
    }

    $ctx = stream_context_create(['http' => [
        'method'  => 'POST',
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query([
            'secret'   => $secret,
            'response' => $token,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
        ]),
        'timeout' => 8,
    ]]);
    $verify = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $ctx);
    $result = $verify ? json_decode($verify, true) : null;

    if (empty($result['success'])
        || ($result['action'] ?? '') !== $expectedAction
        || !in_array($result['hostname'] ?? '', $allowedHosts, true)) {
        return 'The spam check failed. Please refresh the page and try again.';
    }
    return null;
}
