<?php
	
  $name = $_POST['form-name'];
  $data = array();

  if ($name === '') {
  	$data['status'] = 'error';
  	$data['text'] = 'Заполните имя!';
  }else{
  	$data['status'] = 'OK';
  	$data['text'] = 'Ок, project added successfull!';
  }

  header("Content-Type: application/json");
  echo json_encode($data);
  exit;

?>