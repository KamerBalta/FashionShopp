const products = [
    {
      id: 1,
      link: "blouse.html",
      name: "Beyaz Düşük Omuz Bluz",
      price: 349.99,
      image: "images/urunler/blouse/dusuk-omuz-blouse.jpg",
      category: "blouse"
    },
    {
      id: 2,
      link: "blouse.html",
      name: "Siyah Madonna Yaka Bluz",
      price: 299.99,
      image: "images/urunler/blouse/madonna-yaka-blouse.jpg",
      category: "blouse"
    },
    {
      id: 3,
      link: "blouse.html",
      name: "Antrasit Madonna Yaka Düğmeli Bluz",
      price: 349.99,
      image: "images/urunler/blouse/antrasit-madonna-blouse.jpg",
      category: "blouse"
    },
    {
      id: 4,
      link: "blouse.html",
      name: "Beyaz Bodysuit",
      price: 379.99,
      image: "images/urunler/blouse/beyaz-body-blouse.jpg",
      category: "blouse"
    },
    {
      id: 5,
      link: "blouse.html",
      name: "Yağ Yeşili Bodysuit",
      price: 379.99,
      image: "images/urunler/blouse/yagyesil-body-blouse.jpg",
      category: "blouse"
    },
    {
      id: 6,
      link: "blouse.html",
      name: "Siyah Body",
      price: 279.99,
      image: "images/urunler/blouse/siyah-body-blouse.jpg",
      category: "blouse"
    },
    {
      id: 7,
      link: "blouse.html",
      name: "Haki Soft Touch Bluz",
      price: 379.99,
      image: "images/urunler/blouse/haki-softtouch-blouse.jpg",
      category: "blouse"
    },
    {
      id: 8,
      link: "blouse.html",
      name: "Kahve Soft Touch Bluz",
      price: 379.99,
      image: "images/urunler/blouse/kahve-softtouch-blouse.jpg",
      category: "blouse"
    },
    {
        id: 9,
        link: "coats.html",
        name: "Acı Kahve Kısa Kürk",
        price: 1299.99,
        image: "images/urunler/coats/AcıKahveKısaKurk.jpg",
        category: "coats"
      },
      {
        id: 10,
        link: "coats.html",
        name: "Antrasit Maxi Kaşe Kaban",
        price: 1299.99,
        image: "images/urunler/coats/AntrasitKaseKaban.jpg",
        category: "coats"
      },
      {
        id: 11,
        link: "coats.html",
        name: "Bej Maxi Kaşe Kaban",
        price: 1299.99,
        image: "images/urunler/coats/BejKaseKaban.jpg",
        category: "coats"
      },
      {
        id: 12,
        link: "coats.html",
        name: "Çizgili Kısa Kaban",
        price: 1199.99,
        image: "images/urunler/coats/CizgiliKısaKaban.jpg",
        category: "coats"
      },
      {
        id: 13,
        link: "coats.html",
        name: "Kahve Denim Detaylı Mont",
        price: 999.99,
        image: "images/urunler/coats/KahveDenimMont.jpg",
        category: "coats"
      },
      {
        id: 14,
        link: "coats.html",
        name: "Kahve Maxi Kaşe Kaban",
        price: 1299.99,
        image: "images/urunler/coats/KahveKaseKaban.jpg",
        category: "coats"
      },
      {
        id: 15,
        link: "coats.html",
        name: "Kürklü Siyah Kaşe Kaban",
        price: 1499.99,
        image: "images/urunler/coats/KurkluSiyahKaseKaban.jpg",
        category: "coats"
      },
      {
        id: 16,
        link: "coats.html",
        name: "Siyah Maxi Kaşe Kaban",
        price: 1299.99,
        image: "images/urunler/coats/SiyahKaseKaban.jpg",
        category: "coats"
      },
      {
        id: 17,
        link: "coats.html",
        name: "Taş Renk Bağlamalı Mont",
        price: 999.99,
        image: "images/urunler/coats/TasBaglamalıMont.jpg",
        category: "coats"
      },
      {
        id: 18,
        link: "coats.html",
        name: "Taş Renk Orta Boy Kürk",
        price: 1499.99,
        image: "images/urunler/coats/TasOrtaKürk.jpg",
        category: "coats"
      },
      {
        id: 19,
        link: "dress.html",
        name: "Dısney Beyaz Elbise",
        price: 449.99,
        image: "images/urunler/dress/dısney-dres.jpg",
        category: "dress"
      },
      {
        id: 20,
        link: "dress.html",
        name: "Denim Elbise",
        price: 569.99,
        image: "images/urunler/dress/denim-dres.jpg",
        category: "dress"
      },
      {
        id: 21,
        link: "dress.html",
        name: "Bağlamalı Beyaz Elbise",
        price: 779.99,
        image: "images/urunler/dress/baglama-beyaz-dres.jpg",
        category: "dress"
      },
      {
        id: 22,
        link: "dress.html",
        name: "Düşük Omuz Mavi Elbise",
        price: 579.99,
        image: "images/urunler/dress/dusuk-omuz-mavi-dres.jpg",
        category: "dress"
      },
      {
        id: 23,
        link: "dress.html",
        name: "Madonna Yaka Mavi Elbise",
        price: 679.99,
        image: "images/urunler/dress/madonna-yaka-mavi-dres.jpg",
        category: "dress"
      },
      {
        id: 24,
        link: "dress.html",
        name: "Kemerli Antrasit Elbise",
        price: 379.99,
        image: "images/urunler/dress/kemerli-tensel-antrasit-dres.jpg",
        category: "dress"
      },
      {
        id: 25,
        link: "dress.html",
        name: "Kemerli Haki Elbise",
        price: 379.99,
        image: "images/urunler/dress/kemerli-tensel-haki-dres.jpg",
        category: "dress"
      },
      {
        id: 26,
        link: "dress.html",
        name: "Siyah Kaşkorse Elbise",
        price: 549.99,
        image: "images/urunler/dress/siyah-kaskorse-dres.jpg",
        category: "dress"
      },
      {
        id: 27,
        link: "dress.html",
        name: "Straplez Denim Elbise",
        price: 789.99,
        image: "images/urunler/dress/straplez-kot-dres.jpg",
        category: "dress"
      },
      {
        id: 28,
        link: "dress.html",
        name: "Uzun Kollu Dantel Beyaz Elbise",
        price: 599.99,
        image: "images/urunler/dress/uzunkollu-dantel-beyaz-dres.jpg",
        category: "dress"
      },
      {
        id: 29,
        link: "jackets.html",
        name: "Bej Kürk Ceket",
        price: 799.99,
        image: "images/urunler/jackets/BejKurkCeket.jpg",
        category: "jackets"
      },
      {
        id: 30,
        link: "jackets.html",
        name: "Bej Kuşaklı Ceket",
        price: 699.99,
        image: "images/urunler/jackets/BejKusaklıCeket.jpg",
        category: "jackets"
      },
      {
        id: 31,
        link: "jackets.html",
        name: "Beyaz Crop Ceket",
        price: 499.99,
        image: "images/urunler/jackets/BeyazCropCeket.jpg",
        category: "jackets"
      },
      {
        id: 32,
        link: "jackets.html",
        name: "Siyah Çizgili Oversize Ceket",
        price: 549.99,
        image: "images/urunler/jackets/CizgiliOversizeCeket.jpg",
        category: "jackets"
      },
      {
        id: 33,
        link: "jackets.html",
        name: "Mavi Denim Ceket",
        price: 599.99,
        image: "images/urunler/jackets/DenimCeket.jpg",
        category: "jackets"
      },
      {
        id: 34,
        link: "jackets.html",
        name: "Kahve Deri Ceket",
        price: 799.99,
        image: "images/urunler/jackets/KahveDeriCeket.jpg",
        category: "jackets"
      },
      {
        id: 35,
        link: "jackets.html",
        name: "Kahve Kısa Ceket",
        price: 499.99,
        image: "images/urunler/jackets/KahveKısaCeket.jpg",
        category: "jackets"
      },
      {
        id: 36,
        link: "jackets.html",
        name: "Lacivert Belden Oturmalı Ceket",
        price: 699.99,
        image: "images/urunler/jackets/LacivertBlazer.jpg",
        category: "jackets"
      },
      {
        id: 37,
        link: "jackets.html",
        name: "Leopar Desenli Ceket",
        price: 899.99,
        image: "images/urunler/jackets/LeoparCeket.jpg",
        category: "jackets"
      },
      {
        id: 38,
        link: "jackets.html",
        name: "Belden Oturmalı Denim Ceket",
        price: 699.99,
        image: "images/urunler/jackets/OturanDenim.jpg",
        category: "jackets"
      },
      {
        id: 39,
        link: "pants.html",
        name: "Çizgili Kumaş Pantolon",
        price: 449.99,
        image: "images/urunler/pants/KumasPantolon1.jpg",
        category: "pants"
      },
      {
        id: 40,
        link: "pants.html",
        name: "Beyaz Keten Pantolon",
        price: 499.99,
        image: "images/urunler/pants/KetenPantolon1.jpg",
        category: "pants"
      },
      {
        id: 41,
        link: "pants.html",
        name: "Pembe Kumaş Pantolon",
        price: 549.99,
        image: "images/urunler/pants/PembeKPantolon1.jpg",
        category: "pants"
      },
      {
        id: 42,
        link: "pants.html",
        name: "Kahve Palazzo Pantolon",
        price: 549.99,
        image: "images/urunler/pants/KahvePalazzoP1.jpg",
        category: "pants"
      },
      {
        id: 43,
        link: "pants.html",
        name: "Leopar Desenli Jean",
        price: 599.99,
        image: "images/urunler/pants/LeoparJean1.jpg",
        category: "pants"
      },
      {
        id: 44,
        link: "pants.html",
        name: "Deri Pantolon",
        price: 599.99,
        image: "images/urunler/pants/DeriPantolon1.jpg",
        category: "pants"
      },
      {
        id: 45,
        link: "pants.html",
        name: "Eskitme Wide Jean",
        price: 499.99,
        image: "images/urunler/pants/EskitmeJean1.jpg",
        category: "pants"
      },
      {
        id: 46,
        link: "pants.html",
        name: "İspanyol Paça Beyaz Jean",
        price: 499.99,
        image: "images/urunler/pants/BeyazJean1.jpg",
        category: "pants"
      },
      {
        id: 47,
        link: "pants.html",
        name: "Pudra Pantolon",
        price: 449.99,
        image: "images/urunler/pants/PudraPantolon.jpg",
        category: "pants"
      },
      {
        id: 48,
        link: "pants.html",
        name: "Antrasit Pantolon",
        price: 449.99,
        image: "images/urunler/pants/AntrasitPantolon.jpg",
        category: "pants"
      },
      {
        id: 49,
        link: "shirts.html",
        name: "Oversize Gömlek",
        price: 349.99,
        image: "images/urunler/shirts/oversize-beyaz-shirt.jpg",
        category: "shirts"
      },
      {
        id: 50,
        link: "shirts.html",
        name: "Overize Pembe Gömlek",
        price: 349.99,
        image: "images/urunler/shirts/pembe-shirt.jpg",
        category: "shirts"
      },
      {
        id: 51,
        link: "shirts.html",
        name: "Oversize Kahverengi Gömlek",
        price: 349.99,
        image: "images/urunler/shirts/kahve-shirt.jpg",
        category: "shirts"
      },
      {
        id: 52,
        link: "shirts.html",
        name: "Haki Gömlek",
        price: 489.99,
        image: "images/urunler/shirts/pensli-haki-shirt.jpg",
        category: "shirts"
      },
      {
        id: 53,
        link: "shirts.html",
        name: "Bağlama Siyah Gömlek",
        price: 429.99,
        image: "images/urunler/shirts/baglama-siyah-shirt.jpg",
        category: "shirts"
      },
      {
        id: 54,
        link: "shirts.html",
        name: "Kot Gömlek",
        price: 519.99,
        image: "images/urunler/shirts/kot-shirt.jpg",
        category: "shirts"
      },
      {
        id: 55,
        link: "shirts.html",
        name: "Mavi Çizgili Gömlek",
        price: 379.99,
        image: "images/urunler/shirts/cizgili-mavi-shirt.jpg",
        category: "shirts"
      },
      {
        id: 56,
        link: "shirts.html",
        name: "Korse Siyah Gömlek",
        price: 429.99,
        image: "images/urunler/shirts/korse-siyah-shirt.jpg",
        category: "shirts"
      },
      {
        id: 57,
        link: "shirts.html",
        name: "Gri Gömlek",
        price: 359.99,
        image: "images/urunler/shirts/gri-shirt.jpg",
        category: "shirts"
      },
      {
        id: 58,
        link: "shirts.html",
        name: "Oversize Siyah Gömlek",
        price: 349.99,
        image: "images/urunler/shirts/oversize-siyah-shirt.jpg",
        category: "shirts"
      },
      {
        id: 59,
        link: "shorts.html",
        name: "Beyaz Kot Şort",
        price: 399.99,
        image: "images/urunler/shorts/BeyazKotSort.jpg",
        category: "shorts"
      },
      {
        id: 60,
        link: "shorts.html",
        name: "Mavi Kot Şort",
        price: 399.99,
        image: "images/urunler/shorts/MaviKotSort.jpg",
        category: "shorts"
      },
      {
        id: 61,
        link: "shorts.html",
        name: "Bermuda Şort",
        price: 449.99,
        image: "images/urunler/shorts/BermudaSort.jpg",
        category: "shorts"
      },
      {
        id: 62,
        link: "shorts.html",
        name: "Beyaz Keten Şort",
        price: 449.99,
        image: "images/urunler/shorts/BeyazKetenSort.jpg",
        category: "shorts"
      },
      {
        id: 63,
        link: "shorts.html",
        name: "Yırtık Kot Şort",
        price: 449.99,
        image: "images/urunler/shorts/YırtıkKotSort.jpg",
        category: "shorts"
      },
      {
        id: 64,
        link: "shorts.html",
        name: "Keten Şort",
        price: 499.99,
        image: "images/urunler/shorts/KetenSort.JPG",
        category: "shorts"
      },
      {
        id: 65,
        link: "shorts.html",
        name: "Siyah Kot Şort",
        price: 399.99,
        image: "images/urunler/shorts/SiyahSort.jpg",
        category: "shorts"
      },
      {
        id: 66,
        link: "shorts.html",
        name: "Bordo Şort",
        price: 349.99,
        image: "images/urunler/shorts/BordoSort.jpg",
        category: "shorts"
      },
      {
        id: 67,
        link: "shorts.html",
        name: "Mavi Şort",
        price: 349.99,
        image: "images/urunler/shorts/MaviSort.jpg",
        category: "shorts"
      },
      {
        id: 68,
        link: "shorts.html",
        name: "Keten Pudra Şort",
        price: 399.99,
        image: "images/urunler/shorts/PudraSort.jpg",
        category: "shorts"
      },
      {
        id: 69,
        link: "skirt.html",
        name: "Katlı Mini Etek",
        price: 449.99,
        image: "images/urunler/skirts/KatlıMiniEtek.jpg",
        category: "skirts"
      },
      {
        id: 70,
        link: "skirt.html",
        name: "Uzun Yırtmaçlı Etek",
        price: 499.99,
        image: "images/urunler/skirts/UzunYırtmaclıEtek.jpg",
        category: "skirts"
      },
      {
        id: 71,
        link: "skirt.html",
        name: "Kahve Deri Mini Etek",
        price: 549.99,
        image: "images/urunler/skirts/DeriMiniEtek.jpg",
        category: "skirts"
      },
      {
        id: 72,
        link: "skirt.html",
        name: "Tüllü Mini Etek",
        price: 599.99,
        image: "images/urunler/skirts/UzunTülEtek.jpg",
        category: "skirts"
      },
      {
        id: 73,
        link: "skirt.html",
        name: "Beyaz Mini Tül Etek",
        price: 599.99,
        image: "images/urunler/skirts/MiniTulEtek.jpg",
        category: "skirts"
      },
      {
        id: 74,
        link: "skirt.html",
        name: "Siyah Fırfırlı Mini Etek",
        price: 499.99,
        image: "images/urunler/skirts/FırfırlıMiniEtek.jpg",
        category: "skirts"
      },
      {
        id: 75,
        link: "skirt.html",
        name: "Mini Bordo Etek",
        price: 399.99,
        image: "images/urunler/skirts/MiniBordoEtek.jpg",
        category: "skirts"
      },
      {
        id: 76,
        link: "skirt.html",
        name: "Mini Kot Etek",
        price: 499.99,
        image: "images/urunler/skirts/MiniKotEtek.jpg",
        category: "skirts"
      },
      {
        id: 77,
        link: "skirt.html",
        name: "Uzun Lacivert Etek",
        price: 449.99,
        image: "images/urunler/skirts/UzunLacivertEtek.jpg",
        category: "skirts"
      },
      {
        id: 78,
        link: "skirt.html",
        name: "Yeşil Pileli Etek",
        price: 449.99,
        image: "images/urunler/skirts/PileliYesilEtek.jpg",
        category: "skirts"
      },
      {
        id: 79,
        link: "trenchcoats.html",
        name: "Antrasit Maxi Trençkot",
        price: 999.99,
        image: "images/urunler/trenchcoats/AntrasitMaxiTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 80,
        link: "trenchcoats.html",
        name: "Bej Maxi Trençkot",
        price: 999.99,
        image: "images/urunler/trenchcoats/BejMaxiTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 81,
        link: "trenchcoats.html",
        name: "Deri Maxi Trençkot",
        price: 1499.99,
        image: "images/urunler/trenchcoats/DeriMaxiTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 82,
        link: "trenchcoats.html",
        name: "Haki Maxi Trençkot",
        price: 999.99,
        image: "images/urunler/trenchcoats/HakiMaxiTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 83,
        link: "trenchcoats.html",
        name: "Antrasit Crop Trençkot",
        price: 699.99,
        image: "images/urunler/trenchcoats/AntrasitCropTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 84,
        link: "trenchcoats.html",
        name: "Bordo Crop Trençkot",
        price: 699.99,
        image: "images/urunler/trenchcoats/BordoCropTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 85,
        link: "trenchcoats.html",
        name: "Orta Boy Denim Trençkot",
        price: 999.99,
        image: "images/urunler/trenchcoats/DenimTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 86,
        link: "trenchcoats.html",
        name: "Orta Boy Deri Trençkot",
        price: 999.99,
        image: "images/urunler/trenchcoats/DeriOrtaTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 87,
        link: "trenchcoats.html",
        name: "Haki Orta Boy Trençkot",
        price: 999.99,
        image: "images/urunler/trenchcoats/HakiOrtaTrenc.jpg",
        category: "trenchcoats"
      },
      {
        id: 88,
        link: "trenchcoats.html",
        name: "Lacivert Crop Trençkot",
        price: 699.99,
        image: "images/urunler/trenchcoats/LacivertCropTrenc.jpg",
        category: "trenchcoats"
      }
  ];
  