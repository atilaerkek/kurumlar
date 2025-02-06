// Okul verileri
const okullar = {
    anamur: [
        { kod: "264499", ad: "Anamur Anadolu Lisesi" },
        { kod: "750857", ad: "Anamur Cumhuriyet Anadolu Lisesi" },
        { kod: "758234", ad: "Şehit İbrahim Armut Fen Lisesi" },
        { kod: "764926", ad: "Anamur Şehit Yüksel Alçın Anadolu İmam Hatip Lisesi" },
        { kod: "156923", ad: "Anamur Halk Eğitimi Merkezi" },
        { kod: "214052", ad: "Rüştü Kazım Yücelen Mesleki Eğitim Merkezi" },
        { kod: "966349", ad: "Anamur Rehberlik ve Araştırma Merkezi" },
        { kod: "766166", ad: "Anamur Bilim ve Sanat Merkezi" },
        { kod: "954384", ad: "Anamur İsmihan Çerçi Anaokulu" },
        { kod: "975011", ad: "Akdeniz İlkokulu" },
        { kod: "763105", ad: "Anamur Kıbrıs İlkokulu" },
        { kod: "762360", ad: "Anamur 15 Temmuz Milli İrade İlkokulu" },
        { kod: "700566", ad: "Anıtlı Alanoba İlkokulu" },
        { kod: "700572", ad: "Bozdoğan Mamure İlkokulu" },
        { kod: "700832", ad: "Çarıklar Efeler İlkokulu" },
        { kod: "700823", ad: "Çeltikçi İlkokulu" },
        { kod: "720951", ad: "Demirören Alan İlkokulu" },
        { kod: "700584", ad: "Evciler Nihat Sarı İlkokulu" },
        { kod: "974989", ad: "Fatih İlkokulu" },
        { kod: "975005", ad: "Gercebahşiş Yenimahalle İlkokulu" },
        { kod: "975000", ad: "Güneybahşiş İlkokulu" },
        { kod: "700815", ad: "Güngören İlkokulu" },
        { kod: "700868", ad: "Kalınören İlkokulu" },
        { kod: "700728", ad: "Karalarbahşiş İlkokulu" },
        { kod: "700799", ad: "Köprübaşı İlkokulu" },
        { kod: "700589", ad: "Malaklar İlkokulu" },
        { kod: "700841", ad: "Ortaköy Hidayet Sinanoğlu İlkokulu" },
        { kod: "700576", ad: "Ovabaşı İlkokulu" },
        { kod: "700376", ad: "Rüştü Kazım Yücelen İlkokulu" },
        { kod: "772751", ad: "Sugözü İlkokulu" },
        { kod: "765625", ad: "Şehit Hasan Kuş İlkokulu" },
        { kod: "974978", ad: "Şükrü Köymen İlkokulu" },
        { kod: "752517", ad: "Zehra Marulyalı İlkokulu" },
        { kod: "974980", ad: "Anamur Ortaokulu" },
        { kod: "700564", ad: "Anıtlı Alanoba Ortaokulu" },
        { kod: "700568", ad: "Bozdoğan Mamure Ortaokulu" },
        { kod: "700820", ad: "Çeltikçi Ortaokulu" },
        { kod: "700816", ad: "Demirören Alan Ortaokulu" },
        { kod: "700578", ad: "Evciler Nihat Sarı Ortaokulu" },
        { kod: "700590", ad: "Gercebahşiş Sadet Tuna Ortaokulu" },
        { kod: "700801", ad: "Güngören Ortaokulu" },
        { kod: "700864", ad: "Kalınören Ortaokulu" },
        { kod: "700597", ad: "Karalarbahşiş Ortaokulu" },
        { kod: "700797", ad: "Köprübaşı Ortaokulu" },
        { kod: "700586", ad: "Malaklar Ortaokulu" },
        { kod: "700837", ad: "Ortaköy Hidayet Sinanoğlu Ortaokulu" },
        { kod: "700574", ad: "Ovabaşı Ortaokulu" },
        { kod: "700396", ad: "Rüştü Kazım Yücelen Ortaokulu" },
        { kod: "765636", ad: "Şehit Şükrü Ünlü Ortaokulu" },
        { kod: "974988", ad: "Vakıfbank Atatürk Ortaokulu" },
        { kod: "974986", ad: "Cengiz Topel İmam Hatip Ortaokulu" },
        { kod: "748386", ad: "Zehra Marulyalı Yatılı Bölge Ortaokulu" },
        { kod: "963203", ad: "Abdulkadir Perşembe Vakfı Mesleki ve Teknik Anadolu Lisesi" },
        { kod: "156888", ad: "Anamur Ticaret Mesleki ve Teknik Anadolu Lisesi" },
        { kod: "156864", ad: "Gazi Mesleki ve Teknik Anadolu Lisesi" },
        { kod: "340376", ad: "Valide Sultan Kız Mesleki ve Teknik Anadolu Lisesi" }
    ],
    bozyazi: [
        { kod: "323504", ad: "Bozyazı Anadolu Lisesi" },
        { kod: "751337", ad: "Bozyazı Durmuş Tufan Anadolu İmam Hatip Lisesi" },
        { kod: "214279", ad: "Bozyazı Halk Eğitimi Merkezi" },
        { kod: "971705", ad: "Bozyazı İlk Adım Anaokulu" },
        { kod: "772758", ad: "Kökobası Anaokulu" },
        { kod: "743634", ad: "Beyreli İlkokulu" },
        { kod: "708242", ad: "Bozyazı İlkokulu" },
        { kod: "721261", ad: "Cumhuriyet İlkokulu" },
        { kod: "853265", ad: "Çopurlu İlkokulu" },
        { kod: "708538", ad: "Hüseyin Hüsnü Tekışık İlkokulu" },
        { kod: "737923", ad: "Kaledibi Şehit Turhan Kılıç İlkokulu" },
        { kod: "708531", ad: "Kökobası İlkokulu" },
        { kod: "721274", ad: "Kötekler İlkokulu" },
        { kod: "708713", ad: "Lütfiye Keskin İlkokulu" },
        { kod: "708706", ad: "Tekeli İlkokulu" },
        { kod: "713685", ad: "Tekmen İlkokulu" },
        { kod: "713669", ad: "Vali Çetin Birmek İlkokulu" },
        { kod: "724230", ad: "100. Yıl Örtülü İlkokulu" },
        { kod: "708429", ad: "Atatürk Ortaokulu" },
        { kod: "708437", ad: "Bozyazı Ortaokulu" },
        { kod: "708700", ad: "Gazi Ortaokulu" },
        { kod: "708525", ad: "Kökobası Ortaokulu" },
        { kod: "708710", ad: "Lütfiye Keskin Ortaokulu" },
        { kod: "708416", ad: "Şehit Murat Namdar Ortaokulu" },
        { kod: "713661", ad: "Şehit Sedat Yabalak Ortaokulu" },
        { kod: "708702", ad: "Tekeli Ortaokulu" },
        { kod: "713680", ad: "Tekmen Ortaokulu" },
        { kod: "763592", ad: "Bozyazı Mesleki ve Teknik Anadolu Lisesi" },
        { kod: "751442", ad: "Bozyazı 15 Temmuz Millî İrade Mesleki ve Teknik Anadolu Lisesi" }
    ]
};

// Sayfa yüklendiğinde sonuç alanlarını gizle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sonuc-grup').forEach(grup => {
        grup.style.display = 'none';
    });
});

// Okul listesini güncelle
function okulListesiniGuncelle() {
    const ilce = document.getElementById('ilce').value;
    const okullarSelect = document.getElementById('okullar');
    
    // Okul listesini temizle
    okullarSelect.innerHTML = '<option value="">Okul Seçiniz</option>';
    
    // Sonuç alanlarını temizle ve gizle
    document.getElementById('sonuc1').innerHTML = '';
    document.getElementById('sonuc2').innerHTML = '';
    document.getElementById('sonuc3').innerHTML = '';
    document.querySelectorAll('.sonuc-grup').forEach(grup => {
        grup.style.display = 'none';
    });
    
    if (ilce) {
        // Önce "Tüm Okullar" seçeneğini ekle
        const tumOkullarOption = document.createElement('option');
        tumOkullarOption.value = "tum_okullar";
        tumOkullarOption.textContent = "Tüm Okullar";
        okullarSelect.appendChild(tumOkullarOption);
        
        // Okul türlerini ekle
        const turler = [
            { value: "anaokulu", text: "[ Anaokulu ]", arama: "Anaokulu" },
            { value: "ilkokul", text: "[ İlkokul ]", arama: "İlkokulu" },
            { value: "ortaokul", text: "[ Ortaokul ]", arama: "Ortaokulu" },
            { value: "lise", text: "[ Lise ]", arama: "Lisesi" }
        ];
        
        turler.forEach(tur => {
            const option = document.createElement('option');
            option.value = `tur_${tur.value}`;
            option.textContent = tur.text;
            okullarSelect.appendChild(option);
        });
        
        // Okulları alfabetik sırala
        const filtrelenmisOkullar = [...okullar[ilce]].sort((a, b) => a.ad.localeCompare(b.ad, 'tr'));
        
        // Sıralı okulları listeye ekle
        filtrelenmisOkullar.forEach(okul => {
            const option = document.createElement('option');
            option.value = okul.kod;
            option.textContent = okul.ad;
            okullarSelect.appendChild(option);
        });
    }
}

function ilceSecildi() {
    okulListesiniGuncelle();
}

function okulSecildi() {
    const okullarSelect = document.getElementById('okullar');
    const secilenDeger = okullarSelect.value;
    const ilce = document.getElementById('ilce').value;
    
    // Önce tüm sonuç alanlarını gizle
    document.querySelectorAll('.sonuc-grup').forEach(grup => {
        grup.style.display = 'none';
    });
    
    // Kopyala butonlarını gizle
    document.querySelectorAll('.kopyala-btn').forEach(btn => {
        btn.style.display = 'none';
    });
    
    if (secilenDeger && ilce) {
        // Sonuç alanlarını göster
        document.querySelectorAll('.sonuc-grup').forEach(grup => {
            grup.style.display = 'flex';
        });
        
        if (secilenDeger === "tum_okullar") {
            // Tüm okulları listele
            const filtrelenmisOkullar = [...okullar[ilce]].sort((a, b) => a.ad.localeCompare(b.ad, 'tr'));
            
            document.getElementById('sonuc1').innerHTML = `<span class="label">İlçe:</span><span class="value">${ilce.charAt(0).toUpperCase() + ilce.slice(1)}</span>`;
            document.getElementById('sonuc2').innerHTML = `<span class="label">Toplam Okul Sayısı:</span><span class="value">${filtrelenmisOkullar.length}</span>`;
            
            let tumOkullarListesi = '<div class="okul-listesi">';
            filtrelenmisOkullar.forEach(okul => {
                tumOkullarListesi += `<div class="okul-listesi-item">${okul.kod} ${okul.ad}</div>`;
            });
            tumOkullarListesi += '</div>';
            document.getElementById('sonuc3').innerHTML = tumOkullarListesi;
        } else if (secilenDeger.startsWith('tur_')) {
            // Seçilen türdeki okulları listele
            const turAdi = secilenDeger.replace('tur_', '');
            const tur = {
                'anaokulu': { text: 'Anaokulu', arama: "Anaokulu" },
                'ilkokul': { text: 'İlkokul', arama: "İlkokulu" },
                'ortaokul': { text: 'Ortaokul', arama: "Ortaokulu" },
                'lise': { text: 'Lise', arama: "Lisesi" }
            }[turAdi];

            const filtrelenmisOkullar = okullar[ilce].filter(okul => 
                okul.ad.includes(tur.arama)
            ).sort((a, b) => a.ad.localeCompare(b.ad, 'tr'));
            
            document.getElementById('sonuc1').innerHTML = `<span class="label">İlçe:</span><span class="value">${ilce.charAt(0).toUpperCase() + ilce.slice(1)}</span>`;
            document.getElementById('sonuc2').innerHTML = `<span class="label">Okul Türü:</span><span class="value">${tur.text}</span>`;
            
            let okulListesi = '<div class="okul-listesi">';
            filtrelenmisOkullar.forEach(okul => {
                okulListesi += `<div class="okul-listesi-item">${okul.kod} ${okul.ad}</div>`;
            });
            okulListesi += '</div>';
            document.getElementById('sonuc3').innerHTML = okulListesi;
        } else {
            // Tek bir okul seç
            const secilenOkul = okullar[ilce].find(okul => okul.kod === secilenDeger);
            if (secilenOkul) {
                document.getElementById('sonuc1').innerHTML = `<span class="label">Kurum Kodu:</span><span class="value">${secilenOkul.kod}</span>`;
                document.getElementById('sonuc2').innerHTML = `<span class="label">Kurum Adı:</span><span class="value">${secilenOkul.ad}</span>`;
                document.getElementById('sonuc3').innerHTML = `<span class="value">${secilenOkul.kod} ${secilenOkul.ad}</span>`;
                
                // Sadece tek okul seçildiğinde kopyala butonlarını göster
                document.querySelectorAll('.kopyala-btn').forEach(btn => {
                    btn.style.display = 'inline-block';
                });
            }
        }
    } else {
        document.getElementById('sonuc1').textContent = '';
        document.getElementById('sonuc2').textContent = '';
        document.getElementById('sonuc3').textContent = '';
    }
}

function kopyala(elementId) {
    const element = document.getElementById(elementId);
    const button = element.nextElementSibling;
    let textToCopy;

    const valueElement = element.querySelector('.value');
    if (valueElement) {
        textToCopy = valueElement.textContent;
    } else {
        textToCopy = element.textContent;
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        button.textContent = 'Kopyalandı!';
        button.style.backgroundColor = '#45a049';
        
        setTimeout(() => {
            button.textContent = 'Kopyala';
            button.style.backgroundColor = '#4CAF50';
        }, 2000);
    }).catch(err => {
        console.error('Kopyalama hatası:', err);
        button.textContent = 'Hata!';
        button.style.backgroundColor = '#f44336';
        
        setTimeout(() => {
            button.textContent = 'Kopyala';
            button.style.backgroundColor = '#4CAF50';
        }, 2000);
    });
}