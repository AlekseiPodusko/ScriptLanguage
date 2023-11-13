<?php 
    ob_start();

    echo '<article>';
    echo '<h3>'.$book['bookname'].'</h3>';
    echo '<img src = "public/images/'.$bookOne['image'].'">';
    echo '<a href="book?title='.$bookOne['bookname'].'">'.$bookOne['bookname'].'</a>';
    echo '<p>Author(s): '.$bookOne['author'].'</p>';
    echo '<p>Price: '.$bookOne['price'].'</p>';
    echo '<p>Содержание: '.$bookOne['description'].'</p>';
    echo '<p style="padding-top:10px;">';
    echo '<a href="books" role="button"> Back &raquo;</a>';
    echo '<p>';
    echo '</article>';

    echo '<div style="clear:both;"></div>';


    $content = ob_get_clean();
include 'view/templates/layout.php';
?>