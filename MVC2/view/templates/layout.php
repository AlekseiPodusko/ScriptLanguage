<html>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <div class="header clearfix">
                <h2>Книжный магазин</h2>
                <h4 class = "text-muted">
                    <?php
                    echo '<a href="./">Главная</a> &#187';
                    echo '<a href="books">Книги</a>';
                    if (!empty($book['bookname'])) echo'&#187'.$book['bookname'];
                    ?>
                </h4>
            </div>
            <div id="content" style = "padding-top:20px;">
            <?php 
            echo $content;
            ?>
        </div>
        <footer class="footer">
            <p>&copy; Year Design <i class = "fa fa-child"></i></p>
        </footer>
        </div>
    </body>
</html>