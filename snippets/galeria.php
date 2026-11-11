 <?php 
                    $items = scandir('./image/galeria');
                    function filterValidImages($imagePath) {
                        return (!preg_match("/(\.|\.\.)$/", $imagePath) && !str_contains($imagePath, "_big.")) ? true : false;
                    }
                    $images = array_filter($items, "filterValidImages");
                    $iteration = 0;

?>


<section id="galeria" class="section-gallery">
    <div class="section-content">
        <div class="titulo">
            <h4 class="section-title" id="titulo-galeria">GALERIA</h4>
        </div>
        <div class="tabs">
            <button class="tab-button active" data-tab="dia1">31/02</button>
        </div>
        <div class="tab-content">
            <div id="dia1" class="tab-pane active">
                <div class="image-gallery">
                    <?php foreach($images as $image): ?>
                    <img class="img" src=<?="./image/galeria/".$image ?> alt="Imagem <?= strval($iteration) ?>">
                    <?php $iteration += 1; endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<div id="lightbox" class="lightbox">
    <span class="lightbox-close">&times;</span>
    <a class="lightbox-prev">&#10094;</a>
    <img class="lightbox-content" id="lightbox-img">
    <a class="lightbox-next">&#10095;</a>
</div>
</section>


