<?php
//بَدأْتُ بِبِسْمِ اللهِ رُوحِى بِهِ اهْتَدَتْ
//إِلَى كَشْفِ اَسْرَارٍ بِبَاطِنِهِ انْطَوَتْ
//
//وَ صَلَّيْتُ بِالثَّانِى عَلَى خَيْرِ خَلْقِهِ
//مُحَمَّدٍ مَنْ زَاحَ الضَّلَالَةَ وَ الْغَلَتْ
//
//...https://tinyurl.com/1v3fk
//
//مَقَالُ عَلِيٍّ وَ اِبْنِ عَمِّ مُحَمَّدٍ
//وَ سِرُّ عُلُومٍ لِلْخَلَائِقِ جُمِّعَتْ
//if (! isset($_SERVER['HTTPS']) or $_SERVER['HTTPS'] == 'off' ) {
//    $redirect_url = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
//    header("Location: $redirect_url");
//    exit();
//}
$host = "";
$username = "";
$password = "";
$databasename = "";

  $connect=mysqli_connect($host,$username,$password,$databasename);
  //$db=mysqli_select_db($databasename);

  // gets the user IP Address
  $user_ip=$_SERVER['REMOTE_ADDR'];

  $check_ip = mysqli_query($connect, "SELECT userip FROM ebced_pageview WHERE page='ebcedabdilone' AND userip='$user_ip'");
  if(mysqli_num_rows($check_ip)>=1)
  {

  }
  else
  {
    $insertview = mysqli_query($connect, "INSERT INTO ebced_pageview VALUES('','ebcedabdilone', '$user_ip')");
	$updateview = mysqli_query($connect, "UPDATE ebced_totalview SET totalvisit=totalvisit+1 WHERE ebced_totalview.id=1");
  }
?>
<!doctype html>
<html class="no-js" lang="tr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>ebced.abdil.one</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="https://html5-templates.com/" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="http://ebced.abdil.one">
	<meta property="og:type" content="website">
	<meta property="og:title" content="ebced.abdil.one">
	<meta property="og:description" content="Deney: Ayet/Esma listem bir vefke yerleşir mi?">
	<meta property="og:image" content="http://ebced.abdil.one/img/ogdataimg.png?456">
	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="">
	<meta property="twitter:url" content="http://ebced.abdil.one">
	<meta name="twitter:title" content="ebced.abdil.one">
	<meta name="twitter:description" content="Deney: Ayet/Esma listem bir vefke yerleşir mi?">
	<meta name="twitter:image" content="http://ebced.abdil.one/img/ogdataimg.png?456">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="css/normalize.css" content="text/css">
    <link rel="stylesheet" href="css/keyboard.css" content="text/css">
    <link rel="stylesheet" href="css/main.css" content="text/css">
    <script src="js/bignumber.js"></script>
    <script src="js/keyboard.js"></script>
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
  </head>
  <body>
    <!--[if lt IE 8]>
		<p class="browserupgrade">You are using an
			<strong>outdated</strong> browser. Please
			<a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
		</p>
		<![endif]-->
    <!-- Abjad Square Filler Application Begins Here -->
    <div id="zero" class="content" style="text-align: center; width: 80vw;">
	<p style="font-family: 'Arabic Amiri'; color: darkred; text-shadow: lightyellow 1px 1px 2px, lightyellow -1px 1px 2px,lightyellow 1px -1px 2px, lightyellow -1px -1px 2px; width: 100%;font-size: 27px;text-align: center; vertical-align: middle;"><strong>اَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمْ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمْ</strong></p>
      <p>
        <strong>Merhaba !</strong>
      </p>
      <p>Bu web sayfasında gizli ilimler konusu olan; vefk çalışmalarında -bir yerleştirme sorunsalına yanıt- arayarak zamanımızı kıymetlendirmeye çalışacağız. Kullanım yönergelerini dikkatli okursanız kolayca anlar ve kullanabilirsiniz. Esasen bu web sayfası; bir javascript makrosunu kullanarak hesapladığı -girmiş olacağınız bir dizi Arapça ibareyi- küçük ebced değerinden büyüğüne olmak üzere; anlatıldığı gibi tanımlayacağınız bir sihirli kareye yerleştirerek; satır, sütun ve köşegen eşitliğini sağlıyor mu diye bir deney yapmanıza imkan sağlamaktadır. Kombinasyon sayısı çok fazla olursa tarayıcınız cihazınızın kapasitesine bağlı olarak "KİLİTLENMEYE" eğilimli hale gelir. (Bu kilitlenme bahsi geçen notu yazdıktan sonra bazı geliştirmelerle bu durumu iyileştirdik, deneyip yapamadığınız bir deney varsa tekrar deneyebilirsiniz.</p>
      <p>Sayfayı; içeriğini sınamak ve sonuçları şekillendirmeye başlamak için notcukları okuyuverin.</p>
    </div>
    <div id="u2be" class="accepted video-container" style="text-align: center; width: 80vw; height: 43.4vw;">
		<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UQuevZRQ40c" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
    <div id="half" class="content" style="width: 80vw;">
      <p>
        <strong>Hesaplamalar için öncelikle verileri toplamalıyız...</strong>
      </p>
      <p id="halfqa">Başlangıç olarak ebced hesaplarında sayfamızın kullandığı Javascript makrolarını kendi hesaplama tercihlerimize göre düzenleme imkanımız mevcuttur. Alttaki kodları doğrudan düzenleyebilir ve kendi sayısal değer atamalarınızı olağan istikametinde kullanabilirsiniz, daha önceden düzenleyip cihazınıza kaydettiğiniz bir makro kodu dosyası varsa burada açmak için Yerel Makro Dosyası giriş bölümünü kullanabilirsiniz. Düzenlemelerden cayarak sayfamızın varsayılan makro kodunu "Yeniden Yükle" ⟳ işaretinden yararlanabilirsiniz.</p>
      <p>Karışıklığa neden olmak istemiyorsanız Sağir Ebced Değerlerinden daha derin bir düzenleme yapmamanızı önerebilirim. <br>
        <strong></strong>
      </p>
      <textarea style="height: 276px; overflow-x: auto;" id="halfta" autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" wrap="off"></textarea>
      <br>
      <table style="width: 100%; border: 0px;">
        <tr>
          <td style="padding-top: 5px; padding-bottom: 2px; text-align: right;"><label for="halfin" style="display: inline-block;"><a id="macroreloader" class="linker">⟳ </a><strong>Varsayılan makro</strong></label></td>
          <td style="width: 90%; padding-top: 5px; padding-bottom: 2px; text-align: right;"><input readonly style="width: 100%;" id="halfin" type="text" name="halfin" value="js/abjad.js"></td>
        </tr>
        <tr>
          <td style="padding-top: 5px; text-align: right;"><label for="file" style="display: inline-block;"><strong>Yerel makro dosyası</strong></label></td>
          <td style="width: 90%; padding-top: 5px; text-align: right;"><input style="width: 100%;" id="files" type="file" name="file" value="js/abjad.js"></td>
        </tr>
        <tr>
          <td colspan="2" style="padding-top: 5px; padding-bottom: 2px; "><input type="checkbox" id="macrotester" name="macrotester" value=""><label for="macrotester"><strong>Düzenlemeyi tamamladım, kodu test et. </strong></label><input class="tablecodes" style="" type="checkbox" id="shadda" name="shadda" value=""><label class="tablecodes" style="" for="shadda"><strong>Şeddeli harfleri çift hesapla. </strong></label><button class="tablecodes" style="" type="button" onclick="downloadjsmacro()">Düzenlediğim Kodu İndir</button></td>
        </tr>
        <tr class="tablecodes" style="">
          <td colspan="2" style="padding-top: 5px; padding-bottom: 2px;">
            <p style="width: 100%;">Makro'nun <strong>abjad() fonksiyonu</strong> için kullanılacak <strong>tablo kodlarını</strong> virgülle ayırarak listelemelisiniz. Girmediğiniz tablo kodları test edilmeyecek ve kullanılmayacaktır. Varsayılan makro kodu için 0-15 arası değerlerde tanımlı 16 ebced tablosu kodu vardır. Kodları düzenleyerek kendi tablo kodlarınızı da tanımlayabilirsiniz. Girdiğiniz tablo kodları için Arapça karakterlerin verdiği ebced değerleri listelenir. Vefk araştırmasında değerlendirmek istemediğiniz tablo kodlarının girişini yapmak zaman israfına neden olur. <strong>"Makroyu düzenlemeyi tamamladım"</strong> kutucuğunu iptal ederseniz, <strong>sayfa yeniden yüklenir.</strong>
            </p>
          </td>
        </tr>
        <tr class="tablecodes" style="">
          <td style="padding-top: 5px; text-align: right;"><label for="tablecodes" style="display: inline-block;"><strong>Tablo kodları</strong></label></td>
          <td style="width: 90%; padding-top: 5px; text-align: right;"><input style="width: 100%;" id="tablecodes" type="text" name="tablecodes" value="0,1,2,3"></td>
        </tr>
      </table>
      <div id="macropreview" style="width: 100%;">
      <table style="width: 100%; border: 0px;" id="testtable" class="tablecodes" style=""></table>
      </div>
    </div>
    <form id="stepone" action="savethis.php?find=searcher" method="post">
    <div id="one" class="content" style="width: 80vw;">
      <p>
        <strong>Hesaplamalar için öncelikle verileri toplamalıyız...</strong>
      </p>
      <p id="oneqa">Bir sihirli kare sıralaması girişi yaparak başlayalım. Metin giriş bölümüne sihirli kare tablonuzu yapıştırabilirsiniz. Tanımlayacağınız sıralamada 2'den büyük bir tam sayının karesi kadar ardışık sayılar yer almalıdır. Sayfamızdaki Javascript kodu veri toplama işlemlerinin ardından burada tanımladığınız sıralamaya uygun olarak daha sonra gireceğiniz veri bloklarının; örneğin Esma-ul Husna listenizin, ebced değerlerinin satır toplamlarını test edecek. Örneğin: 4 9 2 3 5 7 8 1 6 </p>
      <p>Soldan sağa ve yukarıdan aşağı doğru miktarda sayıyı boşluk, tab, satır sonu ve -belirlenen- ayraçlarla ayırarak girişinizi tamamlayınız:</p>
      <textarea style="height: 276px;" id="oneta" name="oneta" autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" wrap="off"></textarea>
      <br>
      <table style="width: 100%; border: 0px;">
        <tr>
          <td style="padding-top: 5px; padding-bottom: 2px; text-align: right;"><label for="onein" style="display: inline-block;"><strong>Ayraç</strong></label></td>
          <td style="width: 90%; padding-top: 5px; padding-bottom: 2px; text-align: right;"><input readonly style="width: 100%;" id="onein" type="text" name="onein"></td>
        </tr>
        <tr>
          <td style="padding-top: 5px; text-align: right;"><label for="onefn" style="display: inline-block;"><strong>Olası kare</strong></label></td>
          <td style="width: 90%; padding-top: 5px; text-align: right;"><input readonly style="width: 100%;" id="onefn" type="text" name="onefn"></td>
        </tr>
      </table>
      <div id="squarepreview" style="width: 100%;"></div>
    </div>
    <div id="two" class="content" style="width: 80vw;">
      <p>
        <strong>Hesaplamalar için öncelikle verileri toplamalıyız...</strong>
      </p>
      <p id="twoqa">Ebced değerleri hesaplanmak üzere kayıtlı tablolarınızdan Arapça liste girişi yapabilirsiniz. Girdiğiniz listelerde Ayraç olması muhtemel karakterlerden onayladıklarınız kullanılarak listenizin yapısını tanımlayabilirsiniz. Benim önerim, her bir girişi kendi satırında olmak üzere satır satır girmeniz. [Boşluk]'ları ayraç olarak kullanmak yerine [Yeni satır] kullanmanız daha az sorun ihtimali demek.</p>
      <p><strong>Giriş yaptığınız öğeler için ebced tutarları eşit bulunanların o tablo kodu için listenizin toplam sayısından indirildiğini lütfen hatırlayın. Bu sayı en az tanımladığınız karedeki haneler kadar olmazsa kombinasyonlar yerleştirilemez ve denenemez.</strong></p>
      <p><strong>Örnek kayıtlı listeler: </strong><a onclick="loadtxt('liste/esmax276.txt')"><strong>276 adet Esma-ul Hüsna</strong></a> <a onclick="loadtxt('liste/esmax99.txt')"><strong>99 adet Esma-ul Hüsna</strong></a> <a onclick="loadtxt('liste/allletters.txt')"><strong>Arap Alfabesi</strong></a></p>
      <textarea style="font-family: 'Arabic Amiri'; height: 276px;" id="twota" name="twota" class="keyboardInput" autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" wrap="off"></textarea>
      <br>
      <table style="width: 100%; border: 0px;">
        <tr>
          <td style="padding-top: 5px; padding-bottom: 2px; text-align: right;"><label for="twoin"><strong>Ayraç</strong></label></td>
          <td id="twoin" style="width: 90%; padding-top: 5px; padding-bottom: 2px; text-align: right;"></td>
        </tr>
        <tr>
          <td style="padding-top: 5px; text-align: right;"><label for="twofn" style="display: inline-block;"><strong>Olası ifadeler</strong></label></td>
          <td style="width: 90%; padding-top: 5px; text-align: right;"><input readonly style="width: 100%;" id="twofn" type="text" name="twofn"></td>
        </tr>
        <tr>
          <td style="padding-top: 5px; text-align: right;"><label for="twofm" style="display: inline-block;"><strong>Regex</strong></td>
          <td style="width: 90%; padding-top: 5px; text-align: right;"><input readonly style="width: 100%;" id="twofm" type="text" name="twofm"></td>
        </tr>
      </table>
      <div id="phrasespreview" direction="rtl" style="font-family: 'Arabic Amiri'; direction: rtl; width: 100%; word-wrap: break-word;"></div>
    </div>
    <div id="results" class="results" style="width: 80vw;">
      <p>
        <strong>Veriler ışığında hesabının tuttuğu bulunan kareler...</strong>
      </p>
      <span id="endofresults"></span>
    </div>
    <div id="pview" class="content" style="width: 80vw;">
      <center id="kombinasyon">
        <input id="begincalc" name="begincalc" type="button" value="KARELER İÇİN KOMBİNASYONLARI TESTE BAŞLA" style="color: rgb(55, 100, 55);">
      </center>
    </div>
    </form>
    <div id="bottomer" class="accepted" style="width: 80vw; text-align: center; vertical-align: middle;"><p style="font-family: 'Arabic Amiri'; color: darkred; text-shadow: lightyellow 1px 1px 2px, lightyellow -1px 1px 2px,lightyellow 1px -1px 2px, lightyellow -1px -1px 2px; width: 100%;font-size: 27px;text-align: center; vertical-align: middle;"><strong>فَإِن تَوَلَّيْتُمْ فَمَا سَأَلْتُكُم مِّنْ أَجْرٍ إِنْ أَجْرِيَ إِلاَّ عَلَى اللّهِ وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ</strong></p>Kullanıyorsan, deniyorsan; herhangi bir olumsuzluğun sorumlususundur. Ödülün tahmin edilemez. Hoş ve keyifli bir ziyaret süreci deneyimlemenizi diler, sizin ve bizim yararlı ilimlere ulaşmamızı temenni ederiz. 2022 (bir kere daha!)<p style="color: darkred; text-shadow: lightyellow 1px 1px 2px, lightyellow -1px 1px 2px,lightyellow 1px -1px 2px, lightyellow -1px -1px 2px; width: 100%;font-size: 27px;text-align: center; vertical-align: middle;"><strong><?php
    $stmt = mysqli_query($connect, "SELECT * FROM ebced_totalview WHERE id=1");
    $deney = mysqli_query($connect, "SELECT * FROM ebced_searches");
    $bulgu = mysqli_query($connect, "SELECT * FROM ebced_founders");
    while ($aunter = mysqli_fetch_assoc($stmt))
    {
    echo "Kayıtlar: " . mysqli_num_rows($deney) . " deney, " . mysqli_num_rows($bulgu) . " bulgu, " . $aunter['totalvisit'] . " ziyaret.";
    }
    ?></strong></p><p style="width: 100%; font-size: 72px; text-align: center; vertical-align: middle;"><center><div id="stage" style="width: 120px; height: 120px;"><div class="spinner"><div class="face1">A</div><div class="face2">1</div><div class="face3">M</div><div class="face4">5</div><div class="face5">U</div><div class="face6">Ω</div></div></div></center></p></div>
    <img src="img/theflag.png" class="theflag"/>
    <script src="js/vendor/jquery-3.6.0.min.js"></script>
    <script>
      window.jQuery || document.write(' < script src = "js/vendor/jquery-3.6.0.min.js" > < \/script>')
    </script>
    <script id="FunctionCentered"></script>
    <script src="js/plugins.js"></script>
    <script id="activemacro"></script>
    <script src="js/main.js"></script>
    <script>
      <!--Open Analytics Code
      -->
    </script>
  </body>
</html>
<?php mysqli_close($connect);?>
