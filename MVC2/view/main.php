<?php
ob_start(); 
?>

<h2>Проект MVC технологии. Книги</h2>
<article>
    <p>
        Просмотр списка книг и детальной иформации по одной из них
    </p>
</article>

<?php
$content = ob_get_clean();
?>
<?php include 'view/templates/layout.php';
?>