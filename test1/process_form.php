<?php
$data = array(
  $_POST['user_name'],
  $_POST['user_surname'],
  $_POST['user_phone'],
  $_POST['user_email']
);

$file = 'data.txt';
$current = implode("\t", $data) . "\n";
file_put_contents($file, $current, FILE_APPEND | LOCK_EX);