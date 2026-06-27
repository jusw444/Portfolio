<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #63b3ed, #7c6ff7);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            border: 1px solid #e9ecef;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: bold;
            color: #495057;
        }
        .value {
            margin-top: 5px;
            padding: 10px;
            background: white;
            border-radius: 4px;
            border: 1px solid #dee2e6;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            color: #6c757d;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 New Portfolio Contact Message</h1>
    </div>

    <div class="content">
        <div class="field">
            <div class="label">👤 Name</div>
            <div class="value">{{ $name }}</div>
        </div>

        <div class="field">
            <div class="label">📧 Email</div>
            <div class="value"><a href="mailto:{{ $email }}">{{ $email }}</a></div>
        </div>

        <div class="field">
            <div class="label">💬 Message</div>
            <div class="value" style="white-space: pre-wrap;">{{ $messageBody }}</div>
        </div>

        <hr style="border: none; border-top: 1px solid #dee2e6; margin: 20px 0;">

        <p style="color: #6c757d; font-size: 14px;">
            This message was sent from your portfolio contact form.
        </p>
    </div>

    <div class="footer">
        <p>Sent from your Laravel Portfolio</p>
    </div>
</body>
</html>