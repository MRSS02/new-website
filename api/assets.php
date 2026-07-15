<?php

/**
 * Built assets aren't currently routeable via vercel-php
 * Manually route assets to be found
 */
if ($_GET['type'] === 'css') {
    header('Content-type: text/css; charset: UTF-8');
    echo require __DIR__ . '/css/' . basename($_GET['file']);
} else if ($_GET['type'] === 'js') {
    header('Content-Type: application/javascript; charset: UTF-8');
    echo require __DIR__ . '/js/' . basename($_GET['file']);
} else if ($_GET['type'] === 'image') {
    $file_type = substr(strrchr(basename($_GET['file']), '.'), 1);	
    header("Content-Type: image/{$file_type}");
	$parent = basename(dirname($_GET['file']));
	if ($parent === 'image') {
		$parent = '';
	}
    echo require __DIR__ . '/image/' . $parent . basename($_GET['file']);
}


