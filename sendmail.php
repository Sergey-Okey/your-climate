<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);
    $subject = trim($_POST["subject"]);

    // Адрес, на который отправлять письмо
    $to = "mail.vashklimat.ru";

    // Заголовки письма
    $headers = "From: $name <$to>" . "\r\n";
    $headers .= "Reply-To: $to" . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";

    // Текст письма
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Обращение: $subject\n";

    // Отправка письма
    $success = mail($to, "Новое обращение с формы", $message, $headers);

    if ($success) {
        echo "Ваше сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.";
    }
} else {
    // Если форма не отправлена методом POST, перенаправляем на главную страницу
    header("Location: index.html");
    exit;
}
?>
