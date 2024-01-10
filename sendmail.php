<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "massage@vashklimat.ru"; // Адрес, на который будут приходить сообщения

    // Получение данных из формы
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["subject"];
		$phon = $_POST["phone"];

    // Формирование заголовков для письма
    $subject = "Новое сообщение с сайта";
    $headers = "From: " . $email;

    // Формирование тела сообщения
    $email_body = "Имя: $name\nEmail: $email\n\n$message";

    // Отправка сообщения
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "При отправке сообщения возникла ошибка";
    }
} else {
    echo "Доступ запрещен"; // Если пользователь пытается обратиться к этому скрипту напрямую
}
?>