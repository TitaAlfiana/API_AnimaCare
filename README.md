<p align="center">
  <a href="https://my-animacare.netlify.app/">
    <img src="https://github.com/TitaAlfiana/AnimaCare/blob/main/src/public/logo/logo-transparan.png" alt="Logo" width=350 height=60>
  </a>

  <h3 align="center">AnimaCare API</h3>

  <p align="center">
    API Documentations AnimaCare application.
  </p>
</p>

## Table of contents

- [Get All Article](#get-all-article)
- [Get Detail Article](#get-detail-article)
- [Add Article](#add-article)
- [Delete Article](#delete-article)
- [Search Article](#search-article)
- [Get All Forum](#get-all-forum)
- [Get Detail Forum](#get-detail-forum)
- [Add Forum](#add-forum)
- [Delete Forum](#delete-forum)
- [Search Forum](#search-forum)
- [Add Comment](#add-comment)
- [Get Category Makanan Kucing](#get-category-makanan-kucing)
- [Get Category Makanan Anjing](#get-category-makanan-anjing)
- [Get Category Parfum](#get-category-parfum)
- [Get Category Vitamin](#get-category-vitamin)
- [Get Category Kandang](#get-category-kandang)
- [Get Category Susu](#get-category-susu)
- [Get Category Obat](#get-category-obat)
- [Get Category Box Pasir](#get-category-box-pasir)
- [Get Category Pasir](#get-category-pasir)
- [Get Category Aksesoris](#get-category-aksesoris)
- [Get Category Shampo](#get-category-shampo)
- [Get Category Tas Hewan](#get-category-tas-hewan)
- [Get Images](#get-images)
- [Detail Documentation API](#detail-documentation-api)
- [Link Deploy](#link-deploy)
- [Credit](#credit)
- [Creator](#creator)

## Get All Article

Mendapatkan seluruh artikel

- ### URL

  /v1/article

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "message": "Selurh artikel berhasil didapatkan",
    "articles": [
        {
            "_id": "629e018dc3e4f0ce8b54f271",
            "title": "Selain Wortel, Kenali Jenis Makanan yang Aman Dikonsumsi Kelinci",
            "descript": "Kelinci sangat identik sebagai hewan pengerat pemakan wortel, namun tahukah kamu jika ternyata makanan kelinci tak hanya itu loh! Makanan yang beragam dengan gizi yang seimbang sangat baik untuk perkembangan kelinci peliharaan. Hal ini dikarenakan kelinci memiliki saluran pencernaan yang sangat sensitif, sehingga perbedaan tekstur makanan sangat diperlukan. Kelinci juga sangat rentan dengan masalah pencernaan seperti diare dan kembung. Untuk itu sebaiknya kamu mengerti jenis makanan apa saja yang bisa dikonsumsi kelinci. Melansir dari Resources Best Friend, Rabu (15/12/2021), kamu bisa memberikan beberapa jenis makanan ini untuk kelinci peliharaan.",
            "subFirstTitle": "Apa saja jenis makanan itu ?",
            "descriptSubFirstTitle": "Pertama sediakan banyak air.Kelinci perlu tetap terhidrasi, sehingga mereka harus memiliki persediaan air minum yang tidak terbatas. Untuk menjaga kebersihan air, bersihkan wadah dan ganti air setiap hari. Hindari menggunakan botol sebagai wadah minum, karena selain susah dibersihkan, kelinci juga akan kesulitan meminumnya. Kedua Jerami Sebagai Makanan pokok kelinci Bagian bawah piramida makanan kelinci berisi serat bertangkai panjang dalam bentuk jerami. Kelinci memerlukan persediaan jerami segar yang tidak terbatas setiap harinya. Beberapa jenis jerami yang sehat untuk kelinci adalah jenis jerami rumput timothy, rumput kebun, jerami brome dan jerami gandum. Kamu bisa menggunakan 1 jenis jerami atau mencampurnya, pastikan jerami masih dalam keadaan bagus, tidak berjamur dan berdebu. ",
            "subSecondTitle": "Tidak hanya itu saja, Pelet dan Sayuran juga menjadi favorit kelinci",
            "descriptSubSecondTitle": "Selanjutnya Pelet dapat diberikan dalam jumlah kecil.Kamu bisa menemukan pelet khusus kelinci di toko hewan peliharaan. Kelinci dewasa berukuran rata-rata (6-10 pon) hanya membutuhkan seperempat cangkir pelet setiap hari. Jika berat kelinci di bawah 5 pon, beri makan 1/8 cangkir saja. Hindari memberi makan pelet terlalu banyak untuk kelinci karena ini bukanlah makanan utama mereka. Kelinci di bawah satu tahun dapat diberi makan pelet alfalfa dan juga jerami rumput. Gunakan pelet dengan kandungan serat yang tinggi, hindari pelet yang sudah dicampur jagung, kacang-kacangan dan biji-bijian karena dapat berbahaya bagi kelinci. Terakhir beri makanan favorite kelinci yaitu Sayuran. Sayuran adalah makanan yang sangat disukai kelinci. Kamu bisa memberi makan kelincimu sayuran setiap hari, sedangkan untuk jenis makanan yang lain cukup berikan 1-2 kali seminggu. Ada beberapa jenis sayuran yang aman untuk kelinci, diantaranya: Sayuran yang bisa dimakan setiap hari: Paprika , Bok choy, Kubis brussel, Bagian atas Wortel, Timun, Selada, Kecambah, Okra, Rumput gandum. Herbal: Kemangi, Daun ketumbar, Dill, Mint, Oregano, Rosemary, Sage, Thyme, Timun jepang Sayuran dan buah yang cukup diberikan 1-2 kali seminggu: Brokoli (batang dan daun), Wortel, Semanggi, Sejenis sawi, Bunga (kembang sepatu,daisy, mawar dll), Kubis, Bayam, Buah (apel, berries, ceri tanpa biji, anggur, melon, nectarine,jeruk, pepaya,persik, pir, nanas, prem dan semangka)",
            "image": "1654522250029-kelinci.jpg",
            "date": "2022-06-06T13:30:53.135Z",
            "__v": 0
        }
    ]
}
```

## Get Detail Article

Mendapatkan detail artikel

- ### URL

  /v1/article/:articleId

- ### Method

  GET

- ### Response
```json
{
    "status": "success",
    "message": "Artikel berhasil ditemukan",
    "article": {
        "_id": "629e018dc3e4f0ce8b54f271",
        "title": "Selain Wortel, Kenali Jenis Makanan yang Aman Dikonsumsi Kelinci",
        "descript": "Kelinci sangat identik sebagai hewan pengerat pemakan wortel, namun tahukah kamu jika ternyata makanan kelinci tak hanya itu loh! Makanan yang beragam dengan gizi yang seimbang sangat baik untuk perkembangan kelinci peliharaan. Hal ini dikarenakan kelinci memiliki saluran pencernaan yang sangat sensitif, sehingga perbedaan tekstur makanan sangat diperlukan. Kelinci juga sangat rentan dengan masalah pencernaan seperti diare dan kembung. Untuk itu sebaiknya kamu mengerti jenis makanan apa saja yang bisa dikonsumsi kelinci. Melansir dari Resources Best Friend, Rabu (15/12/2021), kamu bisa memberikan beberapa jenis makanan ini untuk kelinci peliharaan.",
        "subFirstTitle": "Apa saja jenis makanan itu ?",
        "descriptSubFirstTitle": "Pertama sediakan banyak air.Kelinci perlu tetap terhidrasi, sehingga mereka harus memiliki persediaan air minum yang tidak terbatas. Untuk menjaga kebersihan air, bersihkan wadah dan ganti air setiap hari. Hindari menggunakan botol sebagai wadah minum, karena selain susah dibersihkan, kelinci juga akan kesulitan meminumnya. Kedua Jerami Sebagai Makanan pokok kelinci Bagian bawah piramida makanan kelinci berisi serat bertangkai panjang dalam bentuk jerami. Kelinci memerlukan persediaan jerami segar yang tidak terbatas setiap harinya. Beberapa jenis jerami yang sehat untuk kelinci adalah jenis jerami rumput timothy, rumput kebun, jerami brome dan jerami gandum. Kamu bisa menggunakan 1 jenis jerami atau mencampurnya, pastikan jerami masih dalam keadaan bagus, tidak berjamur dan berdebu. ",
        "subSecondTitle": "Tidak hanya itu saja, Pelet dan Sayuran juga menjadi favorit kelinci",
        "descriptSubSecondTitle": "Selanjutnya Pelet dapat diberikan dalam jumlah kecil.Kamu bisa menemukan pelet khusus kelinci di toko hewan peliharaan. Kelinci dewasa berukuran rata-rata (6-10 pon) hanya membutuhkan seperempat cangkir pelet setiap hari. Jika berat kelinci di bawah 5 pon, beri makan 1/8 cangkir saja. Hindari memberi makan pelet terlalu banyak untuk kelinci karena ini bukanlah makanan utama mereka. Kelinci di bawah satu tahun dapat diberi makan pelet alfalfa dan juga jerami rumput. Gunakan pelet dengan kandungan serat yang tinggi, hindari pelet yang sudah dicampur jagung, kacang-kacangan dan biji-bijian karena dapat berbahaya bagi kelinci. Terakhir beri makanan favorite kelinci yaitu Sayuran. Sayuran adalah makanan yang sangat disukai kelinci. Kamu bisa memberi makan kelincimu sayuran setiap hari, sedangkan untuk jenis makanan yang lain cukup berikan 1-2 kali seminggu. Ada beberapa jenis sayuran yang aman untuk kelinci, diantaranya: Sayuran yang bisa dimakan setiap hari: Paprika , Bok choy, Kubis brussel, Bagian atas Wortel, Timun, Selada, Kecambah, Okra, Rumput gandum. Herbal: Kemangi, Daun ketumbar, Dill, Mint, Oregano, Rosemary, Sage, Thyme, Timun jepang Sayuran dan buah yang cukup diberikan 1-2 kali seminggu: Brokoli (batang dan daun), Wortel, Semanggi, Sejenis sawi, Bunga (kembang sepatu,daisy, mawar dll), Kubis, Bayam, Buah (apel, berries, ceri tanpa biji, anggur, melon, nectarine,jeruk, pepaya,persik, pir, nanas, prem dan semangka)",
        "image": "1654522250029-kelinci.jpg",
        "date": "2022-06-06T13:30:53.135Z",
        "__v": 0
    }
}
```
## Add Article

Menambahkan Artikel 

- ### URL

  /v1/article

- ### Method

  POST
  
- ### Headers

  Content-Type : multipart/form-data

- ### Body

  - title : string
  - descript : string
  - subFirstTitle : string
  - descriptSubFirstTitle : string
  - subSecondTitle : string
  - descriptSubSecondTitle : string
  - image : string

- ### Response

```json
{
    "status": "success",
    "message": "Artikel berhasil ditambahkan",
    "saveartikel": {
        "title": "Selain Wortel, Kenali Jenis Makanan yang Aman Dikonsumsi Kelinci",
        "descript": "Kelinci sangat identik sebagai hewan pengerat pemakan wortel, namun tahukah kamu jika ternyata makanan kelinci tak hanya itu loh! Makanan yang beragam dengan gizi yang seimbang sangat baik untuk perkembangan kelinci peliharaan. Hal ini dikarenakan kelinci memiliki saluran pencernaan yang sangat sensitif, sehingga perbedaan tekstur makanan sangat diperlukan. Kelinci juga sangat rentan dengan masalah pencernaan seperti diare dan kembung. Untuk itu sebaiknya kamu mengerti jenis makanan apa saja yang bisa dikonsumsi kelinci. Melansir dari Resources Best Friend, Rabu (15/12/2021), kamu bisa memberikan beberapa jenis makanan ini untuk kelinci peliharaan.",
        "subFirstTitle": "Apa saja jenis makanan itu ?",
        "descriptSubFirstTitle": "Pertama sediakan banyak air.Kelinci perlu tetap terhidrasi, sehingga mereka harus memiliki persediaan air minum yang tidak terbatas. Untuk menjaga kebersihan air, bersihkan wadah dan ganti air setiap hari. Hindari menggunakan botol sebagai wadah minum, karena selain susah dibersihkan, kelinci juga akan kesulitan meminumnya. Kedua Jerami Sebagai Makanan pokok kelinci Bagian bawah piramida makanan kelinci berisi serat bertangkai panjang dalam bentuk jerami. Kelinci memerlukan persediaan jerami segar yang tidak terbatas setiap harinya. Beberapa jenis jerami yang sehat untuk kelinci adalah jenis jerami rumput timothy, rumput kebun, jerami brome dan jerami gandum. Kamu bisa menggunakan 1 jenis jerami atau mencampurnya, pastikan jerami masih dalam keadaan bagus, tidak berjamur dan berdebu. ",
        "subSecondTitle": "Tidak hanya itu saja, Pelet dan Sayuran juga menjadi favorit kelinci",
        "descriptSubSecondTitle": "Selanjutnya Pelet dapat diberikan dalam jumlah kecil.Kamu bisa menemukan pelet khusus kelinci di toko hewan peliharaan. Kelinci dewasa berukuran rata-rata (6-10 pon) hanya membutuhkan seperempat cangkir pelet setiap hari. Jika berat kelinci di bawah 5 pon, beri makan 1/8 cangkir saja. Hindari memberi makan pelet terlalu banyak untuk kelinci karena ini bukanlah makanan utama mereka. Kelinci di bawah satu tahun dapat diberi makan pelet alfalfa dan juga jerami rumput. Gunakan pelet dengan kandungan serat yang tinggi, hindari pelet yang sudah dicampur jagung, kacang-kacangan dan biji-bijian karena dapat berbahaya bagi kelinci. Terakhir beri makanan favorite kelinci yaitu Sayuran. Sayuran adalah makanan yang sangat disukai kelinci. Kamu bisa memberi makan kelincimu sayuran setiap hari, sedangkan untuk jenis makanan yang lain cukup berikan 1-2 kali seminggu. Ada beberapa jenis sayuran yang aman untuk kelinci, diantaranya: Sayuran yang bisa dimakan setiap hari: Paprika , Bok choy, Kubis brussel, Bagian atas Wortel, Timun, Selada, Kecambah, Okra, Rumput gandum. Herbal: Kemangi, Daun ketumbar, Dill, Mint, Oregano, Rosemary, Sage, Thyme, Timun jepang Sayuran dan buah yang cukup diberikan 1-2 kali seminggu: Brokoli (batang dan daun), Wortel, Semanggi, Sejenis sawi, Bunga (kembang sepatu,daisy, mawar dll), Kubis, Bayam, Buah (apel, berries, ceri tanpa biji, anggur, melon, nectarine,jeruk, pepaya,persik, pir, nanas, prem dan semangka)",
        "image": "1655699621090-kelinci.jpg",
        "_id": "62aff8a90fe0ff0651c4358a",
        "date": "2022-06-20T04:33:45.353Z",
        "__v": 0
    }
}
```
## Delete Article

Menghapus Article

- ### URL

  /v1/article/:articleId

- ### Method

  DELETE

- ### Response

```json
{
    "status": "success",
    "message": "Artikel berhasil dihapus",
    "deletedarticle": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

## Search Article

Mencari Artikel

- ### URL

  /v1/article/search/:key

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "message": "Artikel berhasil ditemukan",
    "articles": [
        {
            "_id": "629e0452c3e4f0ce8b54f274",
            "title": "Benarkah Hewan Peliharaan Punya Kepribadian Seperti Manusia?",
            "descript": "Apakah kamu punya hewan peliharaan di rumah? Kebanyakan orang mempunyai hewan peliharaan seperti kucing dan anjing. Tetapi ada juga yang punya hewan peliharaan unik seperti ikan, kura-kura, sugar glider bahkan reptil. Tahukah kamu kalau hewan peliharaan memiliki kepribadian yang khas?",
            "subFirstTitle": "Karakteristik Khas Hewan Peliharaan",
            "descriptSubFirstTitle": "Dikutip dari Wonderopolis, ketika kamu mengajak bicara hewan peliharaan, ada kemungkinan dia menjawab dengan caranya sendiri. Mungkin hewan peliharaan suka menggoda majikannya saat bermain atau menunjukkan cinta dengan cara khusus. Bila diperhatikan, hewan peliharaan punya cara berkomunikasi dengan pemilik untuk mengutarakan apa yang diinginkan. Hewan peliharaan kemungkinan bisa bertingkah seperti manusia. Hewan peliharaan punya kebiasaan atau sikap yang bisa diprediksi dari waktu ke waktu. Itulah yang disebut hewan peliharaan mempunyai kepribadian atau karakteristik khas. Kepribadian adalah sesuatu yang biasanya berkaitan dengan manusia lain. Seperti lucu, pintar, peduli, sedih atau bahkan kejam. Ada banyak kepribadian berbeda seperti pada manusia di dunia. Kepribadian adalah cara menggambarkan kebiasaan perilaku orang. Para ilmuwan mempelajari, kebanyakan hewan, termasuk hewan peliharaan biasa seperti anjing dan kucing, dapat menunjukkan ciri-ciri kepribadian yang sama seperti manusia. Contoh, pemilik anjing dapat melihat kebahagiaan di matanya atau melalui goyangan ekor. Anjing dapat kecewa bila tidak diajak pergi naik mobil dengan anggota keluarga lain. Hewan peliharaan bisa merasakan lebih dari sekadar bahagia atau sedih. Seperti manusia, hewan peliharaan bisa menampilkan berbagai ciri kepribadian. Amati sekitar, kemungkinan kamu akan menemukan kucing yang pemarah atau neurotik. Ada juga anjing yang suka berpetualang atau senang bepergian. ",
            "subSecondTitle": "Penelitian kepribadian hewan peliharaan ",
            "descriptSubSecondTitle": "Dilansir dari NBC News, ahli biologi dan fisiologi evolusi Kanada-Inggris, George John Romanes menyimpulkan, spesies selain manusia juga memiliki sifat-sifat seperti manusia. Cacing dapat merasa terkejut dan takut. Serangga memiliki rasa ingin tahu. Ikan bisa cemburu atau marah. Reptil penuh kasih sayang. Burung bisa menjadi sombong atau mengalami teror. Mamalia bisa menunjukkan semua jenis emosi tersebut termasuk kebencian, kekejaman dan rasa malu. Para ilmuwan yang mempelajari kepribadian hewan harus mengatasi banyak keraguan dalam komunitas ilmiah. Sebab hewan tidak bisa memberitahukan pada manusia tentang perasaannya atau menjelaskan perilakunya. Sebagai gantinya, para ilmuwan harus mengandalkan pengamatan rinci dari waktu ke waktu. Hasil pengamatan para ilmuwan perlahan-lahan mulai diterima. Ada lebih dari cukup bukti anekdotal dari pemilik hewan peliharaan. Mereka punya kualifikasi untuk membahas pengamatan rinci selama bertahun-tahun pada hewan peliharaannya. Sejumlah ilmuwan berharap, hasil penelitian mereka suatu hari akan memiliki aplikasi yang sangat praktis. Misal, jika para ilmuwan dapat mempelajari lebih lanjut tentang kepribadian anjing, mungkin dapat membantu seseorang dalam memilih anjing yang tepat sebagai hewan peliharaan. Yang lebih penting, para ilmuwan berharap dapat mengidentifikasi anjing yang bisa menjadi pekerja sangat baik, seperti anjing penuntun (guide dogs) dan anjing penyelamat (rescue dogs).",
            "image": "1654522961042-peliharaan1.jpg",
            "date": "2022-06-06T13:42:42.767Z",
            "__v": 0
        }
     ]
 }
```

## Get All Forum

Mendapatkan seluruh forum

- ### URL

  /v1/forum

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "message": "Seluruh forum berhasil didapatkan",
    "forums": [
        {
            "_id": "62a4842908e8a13a9d2bfc56",
            "nama": "ibnu",
            "title": "merawat kucing",
            "descript": "disini ada yang tau ga cara merawat kucing dengan benar?",
            "comments": [
                "62a4880008e8a13a9d2bfc65"
            ],
            "date": "2022-06-11T12:01:45.621Z",
            "__v": 1
        }
     ]
 }
```

## Get Detail Forum

Mendapatkan detail forum

- ### URL

  /v1/forum/:forumId

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "message": "Forum berhasil ditemukan",
    "forum": {
        "_id": "62a4842908e8a13a9d2bfc56",
        "nama": "ibnu",
        "title": "merawat kucing",
        "descript": "disini ada yang tau ga cara merawat kucing dengan benar?",
        "comments": [
            {
                "_id": "62a4880008e8a13a9d2bfc65",
                "nama": "tita",
                "comment": "kalau saya biasanya beri makanan yang tepat, Menyediakan air minum, Menyikat bulu kucing secara teratur, Menyiapkan rumah kucing, memiliki kotak pasir, Membersihkan gigi kucing, Mengunjungi dokter hewan ",
                "date": "2022-06-11T12:18:08.337Z",
                "__v": 0
            }
        ],
        "date": "2022-06-11T12:01:45.621Z",
        "__v": 1
    }
}
```

## Add Forum

Menambahkan Forum

- ### URL

  /v1/forum

- ### Method

  POST

- ### Headers

  Content-Type : multipart/form-data | application/json

- ### Body

  - nama : string
  - title : string
  - descript : string

- ### Response

```json
{
    "status": "success",
    "message": "Forum berhasil ditambahkan",
    "saveforum": {
        "nama": "ibnu",
        "title": "merawat kucing",
        "descript": "disini ada yang tau ga cara merawat kucing dengan benar?",
        "comments": [],
        "_id": "62af417036b10180cc83e179",
        "date": "2022-06-19T15:32:00.806Z",
        "__v": 0
    }
}
```

## Delete Forum

Menghapus forum

- ### URL

  /v1/forum/:forumId

- ### Method

  DELETE

- ### Response

```json
{
    "status": "success",
    "message": "Forum berhasil dihapus",
    "deletedforum": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

## Search Forum

Mencari forum

- ### URL

  /v1/forum/search/:key

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "message": "Forum berhasil ditemukan",
    "forums": [
        {
            "_id": "62a4842908e8a13a9d2bfc56",
            "nama": "ibnu",
            "title": "merawat kucing",
            "descript": "disini ada yang tau ga cara merawat kucing dengan benar?",
            "comments": [
                "62a4880008e8a13a9d2bfc65"
            ],
            "date": "2022-06-11T12:01:45.621Z",
            "__v": 1
        }
    ]
}
```

## Add Comment

Menambahkan komentar pada detail forum

- ### URL

  /v1/forum/:forumId/comment

- ### Method

  POST
  
- ### Headers

  Content-Type : multipart/form-data | application/json

- ### Body

  - nama : string
  - comment : string

- ### Response

```json
{
    "status": "success",
    "message": "Comment berhasil ditambahkan",
    "comment": {
        "nama": "ibnu",
        "comment": "kalau saya biasanya beri makanan yang tepat, Menyediakan air minum, Menyikat bulu kucing secara teratur, Menyiapkan rumah kucing, memiliki kotak pasir, Membersihkan gigi kucing, Mengunjungi dokter hewan ",
        "_id": "62af42c21afeb5fd2bd7716c",
        "date": "2022-06-19T15:37:38.500Z",
        "__v": 0
    }
}
```

## Get Category Makanan Kucing

Mendapatkan seluruh kategori makanan kucing

- ### URL

  /v1/category/makanan-kucing

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "makananKucing": [
        {
            "_id": "62aa0daf9c439e5ae1c69112",
            "name": "Makanan Kucing Royal Canin",
            "image": "1655311790620-makanan-kucing-royalCanin.png",
            "date": "2022-06-15T16:49:51.303Z",
            "__v": 0
        },
        {
            "_id": "62aa0dd89c439e5ae1c69114",
            "name": "Makanan Kucing Whiskas",
            "image": "1655311832233-makanan-kucing-whiskas.png",
            "date": "2022-06-15T16:50:32.795Z",
            "__v": 0
        },
        {
            "_id": "62aa0dff9c439e5ae1c69116",
            "name": "Makanan Kucing ProPlan",
            "image": "1655311870830-makanan-kucing-proplan.png",
            "date": "2022-06-15T16:51:11.105Z",
            "__v": 0
        }
     ]
  }
```

## Get Category Makanan Anjing

Mendapatkan seluruh kategori makanan anjing

- ### URL

  /v1/category/makanan-anjing

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "makananAnjing": [
        {
            "_id": "62aa10459c439e5ae1c6912b",
            "name": "Makanan Anjing Royal Canin",
            "image": "1655312453230-makanan-anjing-royalcan.png",
            "date": "2022-06-15T17:00:53.873Z",
            "__v": 0
        },
        {
            "_id": "62aa10629c439e5ae1c6912d",
            "name": "Makanan Anjing ProPlan",
            "image": "1655312482429-makanan-anjing-proplan.png",
            "date": "2022-06-15T17:01:22.772Z",
            "__v": 0
        },
        {
            "_id": "62aa108f9c439e5ae1c6912f",
            "name": "Makanan Anjing Bold",
            "image": "1655312527239-makanan-anjing-bolt.png",
            "date": "2022-06-15T17:02:07.571Z",
            "__v": 0
        }
     ]
  }
```

## Get Category Parfum

Mendapatkan seluruh kategori parfum

- ### URL

  /v1/category/parfum

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "parfum": [
        {
            "_id": "62aade56fdf7f4cb9c5c4417",
            "name": "Baby Pet Care Cologne",
            "image": "1655365206283-Baby-Pet-Care-Cologne.png",
            "date": "2022-06-16T07:40:06.305Z",
            "__v": 0
        },
        {
            "_id": "62aaded2fdf7f4cb9c5c4419",
            "name": "Lavish Comfort",
            "image": "1655365330115-Lavish-Comfort.png",
            "date": "2022-06-16T07:42:10.121Z",
            "__v": 0
        },
        {
            "_id": "62aadf1afdf7f4cb9c5c441b",
            "name": "Floral Aloe Perfume & Conditioner",
            "image": "1655365402443-Floral-Aloe-Perfume&Conditioner.png",
            "date": "2022-06-16T07:43:22.451Z",
            "__v": 0
        }
     ]
  }
```

## Get Category Vitamin

Mendapatkan seluruh kategori vitamin

- ### URL

  /v1/category/vitamin

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "vitamin": [
        {
            "_id": "62ab262a81e34c9044558022",
            "name": "Papillon Organic Extra Virgin Coconut Oil",
            "image": "1655383594299-Papillon-Organic-Extra-Virgin-Coconut-Oil.png",
            "date": "2022-06-16T12:46:34.320Z",
            "__v": 0
        },
        {
            "_id": "62ab267681e34c9044558024",
            "name": "Conditioning Tablets",
            "image": "1655383670947-Conditioning-Tablets.png",
            "date": "2022-06-16T12:47:50.951Z",
            "__v": 0
        },
        {
            "_id": "62ab26a081e34c9044558026",
            "name": "Dermatix For Dogs & Cats",
            "image": "1655383712387-DERMATRIX-for-Dogs&Cats.png",
            "date": "2022-06-16T12:48:32.391Z",
            "__v": 0
        }
      ]
  }
```

## Get Category Kandang

Mendapatkan seluruh kategori kandang

- ### URL

  /v1/category/kandang

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "kandang": [
        {
            "_id": "62ac318c146c55961c93eb07",
            "name": "Kandang Anjing",
            "image": "1655452044416-kandang-anjing.png",
            "date": "2022-06-17T07:47:24.435Z",
            "__v": 0
        },
        {
            "_id": "62ac319d146c55961c93eb09",
            "name": "Kandang Kelinci",
            "image": "1655452061236-kandang-kelinci.png",
            "date": "2022-06-17T07:47:41.240Z",
            "__v": 0
        },
        {
            "_id": "62ac31ae146c55961c93eb0b",
            "name": "Kandang Burung",
            "image": "1655452078060-kandang-burung.png",
            "date": "2022-06-17T07:47:58.068Z",
            "__v": 0
        }
     ]
  }
```

## Get Category Susu

Mendapatkan seluruh kategori susu

- ### URL

  /v1/category/susu

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "susu": [
        {
            "_id": "62ac3201146c55961c93eb11",
            "name": "Susu Gromilk",
            "image": "1655452161051-susu-gromilk.png",
            "date": "2022-06-17T07:49:21.565Z",
            "__v": 0
        },
        {
            "_id": "62ac321e146c55961c93eb13",
            "name": "Susu Growppy",
            "image": "1655452190120-susu-growppy.png",
            "date": "2022-06-17T07:49:50.128Z",
            "__v": 0
        },
        {
            "_id": "62ac3239146c55961c93eb15",
            "name": "Susu Growssy",
            "image": "1655452217413-susu-growssy.png",
            "date": "2022-06-17T07:50:17.418Z",
            "__v": 0
        }
     ]
  }
```

## Get Category Obat

Mendapatkan seluruh kategori obat

- ### URL

  /v1/category/obat

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "obat": [
        {
            "_id": "62ac32b0146c55961c93eb1c",
            "name": "Obat Batuxin Dog",
            "image": "1655452336341-obat-batuxin-dog.png",
            "date": "2022-06-17T07:52:16.348Z",
            "__v": 0
        },
        {
            "_id": "62ac32cb146c55961c93eb1e",
            "name": "Obat Catystress",
            "image": "1655452363183-obat-catystress.png",
            "date": "2022-06-17T07:52:43.189Z",
            "__v": 0
        },
        {
            "_id": "62ac32e4146c55961c93eb20",
            "name": "Obat Nexgard",
            "image": "1655452388457-obat-nexgard.png",
            "date": "2022-06-17T07:53:08.463Z",
            "__v": 0
        }
     ]
 }
```

## Get Category Box Pasir

Mendapatkan seluruh kategori box pasir

- ### URL

  /v1/category/box-pasir

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "boxPasir": [
        {
            "_id": "62ac3607146c55961c93eb27",
            "name": "Rimmed Cat Pan Charcoal",
            "image": "1655453191371-Rimmed_Cat_Pan_Charcoal.png",
            "date": "2022-06-17T08:06:31.407Z",
            "__v": 0
        },
        {
            "_id": "62ac3668146c55961c93eb29",
            "name": "Plastik Litter Box",
            "image": "1655453288566-box-pasir.png",
            "date": "2022-06-17T08:08:08.570Z",
            "__v": 0
        },
        {
            "_id": "62ac3684146c55961c93eb2b",
            "name": "Arthacat Litter Box",
            "image": "1655453316080-Arthacat_Litter.png",
            "date": "2022-06-17T08:08:36.090Z",
            "__v": 0
        }
    ]
 }
```

## Get Category Pasir

Mendapatkan seluruh kategori pasir

- ### URL

  /v1/category/pasir

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "pasir": [
        {
            "_id": "62ab42f39ca41565fd7aac83",
            "name": "Natural Pine Cat Litter",
            "image": "1655390963077-Rectangle247.png",
            "date": "2022-06-16T14:49:23.103Z",
            "__v": 0
        },
        {
            "_id": "62ab431f9ca41565fd7aac85",
            "name": "Kitty Sand",
            "image": "1655391007100-Rectangle244.png",
            "date": "2022-06-16T14:50:07.104Z",
            "__v": 0
        },
        {
            "_id": "62ab43549ca41565fd7aac87",
            "name": "Pet's Dream Universal",
            "image": "1655391060448-Group105.png",
            "date": "2022-06-16T14:51:00.463Z",
            "__v": 0
        }
     ]
 }
```

## Get Category Aksesoris

Mendapatkan seluruh kategori aksesoris

- ### URL

  /v1/category/aksesoris

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "aksesoris": [
        {
            "_id": "62ac26bdfb8e47508b6de68f",
            "name": "Kacamata",
            "image": "1655449277278-Rectangle256.png",
            "date": "2022-06-17T07:01:17.298Z",
            "__v": 0
        },
        {
            "_id": "62ac26d3fb8e47508b6de691",
            "name": "Tali Leher",
            "image": "1655449299598-Rectangle257.png",
            "date": "2022-06-17T07:01:39.602Z",
            "__v": 0
        },
        {
            "_id": "62ac26eafb8e47508b6de693",
            "name": "Tempat Makan",
            "image": "1655449322951-Rectangle259.png",
            "date": "2022-06-17T07:02:02.956Z",
            "__v": 0
        }
     ]
 }
```

## Get Category Shampo

Mendapatkan seluruh kategori shampo

- ### URL

  /v1/category/shampo

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "shampo": [
        {
            "_id": "62ad922d73a5e8aabdc43f9c",
            "name": "Hartz Ultra Guard Fea & Tick Shampo",
            "image": "1655542317145-i.png",
            "date": "2022-06-18T08:51:57.160Z",
            "__v": 0
        },
        {
            "_id": "62ad925373a5e8aabdc43f9e",
            "name": "Raid All Miconazole Shampoo",
            "image": "1655542355900-p.png",
            "date": "2022-06-18T08:52:35.908Z",
            "__v": 0
        },
        {
            "_id": "62ad927673a5e8aabdc43fa0",
            "name": "Bioline Dry Clean Shampoo",
            "image": "1655542390076-u.png",
            "date": "2022-06-18T08:53:10.088Z",
            "__v": 0
        }
     ]
  }
```

## Get Category Tas Hewan

Mendapatkan seluruh kategori tas hewan

- ### URL

  /v1/category/tas-hewan

- ### Method

  GET

- ### Response

```json
{
    "status": "success",
    "tasHewan": [
        {
            "_id": "62afbee242459ce25e4887c9",
            "name": "Mobby Travelling Bag",
            "image": "1655684834952-z.png",
            "date": "2022-06-20T00:27:14.974Z",
            "__v": 0
        },
        {
            "_id": "62afbef642459ce25e4887cb",
            "name": "Waterproof Pet Carrier Transparent",
            "image": "1655684854480-x.png",
            "date": "2022-06-20T00:27:34.484Z",
            "__v": 0
        },
        {
            "_id": "62afbf0e42459ce25e4887cd",
            "name": "Pet Carrier Tas Gendong",
            "image": "1655684878372-c.png",
            "date": "2022-06-20T00:27:58.383Z",
            "__v": 0
        }
    ]
}
```
## GEt Images 

Mendapatkan Gambar

- ### URL

  /images/{image}

- ### Method

  GET

- ### Response

File gambar yang di dapatkan

## Detail Documentation API
- <a href="https://documenter.getpostman.com/view/20072942/UzBnpRMg"> Detail Documentation </a>

## Link Deploy
- https://animacare.herokuapp.com/

## Credit
- Node JS
- Express JS
- MongoDB
- Mongoose
- nodemon

## Creator
- <a href="https://github.com/TitaAlfiana"> Tita Alfiana </a>
- <a href="https://github.com/ibnucholdun"> Ibnu Choldun </a>
