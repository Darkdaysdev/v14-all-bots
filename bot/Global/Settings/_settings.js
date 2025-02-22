module.exports = {
  statdeğişken: [
    {
      name: "Sistem",
      type: "acmali",
      description:
        "Otomatik yükseltim ve görevlerdeki otomatik yükseltimi ve çoğu istatistik sistemini devre-dışı bırakır",
    },
    {
      name: "sonYetki",
      display: "Yükseltim Sistemi Son Yetki",
      type: "rol",
      description:
        "Yetki bilgi komutunda verilecek en son yetkiyi ayarlayınız.",
    },
    {
      name: "tamSesPuan",
      display: "Full/Tam Puan",
      type: "puan",
      description:
        "Özel belirlenen kategorilerde en yüksek puanı belirleyiniz.",
    },
    {
      name: "yarımSesPuan",
      display: "Yarım/Genel Puan",
      type: "puan",
      description:
        "Genel tüm odalarda alacağı veya yarım ses puanı olarak belirleyiniz.",
    },
    {
      name: "mesajPuan",
      display: "Mesaj Puanı",
      type: "puan",
      description:
        "Sadece genel sohbet kanalında attığı mesajlardan kazanacağı puanı belirleyiniz.",
    },
    {
      name: "taglıPuan",
      display: "Taglı Puanı",
      type: "puan",
      description: "Sunucuya getirdiği taglı puanını belirleyiniz.",
    },
    {
      name: "yetkiliPuan",
      display: "Yetkili Puanı",
      type: "puan",
      description: "Sunucuda yetkiye başlattığı taglı puanını belirleyiniz.",
    },
    {
      name: "kayıtPuan",
      display: "Kayıt Puanı",
      type: "puan",
      description: "Her kayıtda kazanacağı puanı belirtiniz.",
    },
    {
      name: "görevPuan",
      display: "Görev Puanı",
      type: "puan",
      description: "Her tamamladığında kazanacağı görev puanını belirleyiniz.",
    },
    {
      name: "etkinlikPuan",
      display: "Etkinlik Puanı",
      type: "puan",
      category: "stat",
      description: "Etkinlik modu açıkken her saniye vereceği puan belirlenir.",
    },
    {
      name: "izinliKategoriler",
      ctype: "ALL",
      display: "İzinli Kanallar/Kategoriler",
      type: "kanallar",
      description:
        "Yetkili sisteminin çalışacağı tüm kanallar veya kanal belirleyiniz.",
    },
    {
      name: "fullPuanKategoriler",
      ctype: "ALL",
      display: "Full Puanlı  Kanallar/Kategoriler",
      type: "kanallar",
      description:
        "Yetkili sisteminde tam puan alacak kanallar veya kanal belirleyiniz.",
    },
    {
      name: "ayrıkKanallar",
      display: "Ayrılan Kanallar",
      type: "kanallar",
      category: "channel",
      ctype: "VOICE",
      description:
        "Bu istatistik botunda aynı kategoride olup farklı kategorilere ayırmak istediğiniz ses kanallarını seçiniz.",
    },

    {
      name: "_chats",
      display: "Sohbet Kategorileri",
      type: "kategori",
      description: "Sunucuda bulunan metin kanallarının kategori ayarları",
    },
    {
      name: "_voices",
      display: "Ses Kategorileri",
      type: "kategori",
      description: "Sunucuda bulunan metin kanallarının kategori ayarları",
    },
    {
      name: "_staffs",
      display: "Yetkiler",
      type: "kategori",
      description: "Sunucuda bulunan metin kanallarının kategori ayarları",
    },
  ],
  değişkenler: [
    {
      name: "type",
      type: "type",
      display: "Taglı Sistem",
      category: "guild",
      description: "Taglı/Tagsız sistemi aç kapa yapar.",
    },
    {
      name: "Etkinlik",
      type: "acmali",
      category: "guild",
      description:
        "Sunucuda etkinlik durumu açık olduğunda burası aktif olur el ile de açabilirsiniz/kapatabilirsiniz.",
    },
    {
      name: "Toplantı",
      type: "acmali",
      category: "guild",
      description:
        "Sunucuda toplantı durumu açık olduğunda burası aktif olur el ile de açabilirsiniz/kapatabilirsiniz.",
    },
    {
      name: "isimyas",
      type: "acmali",
      display: "İsim Yaş",
      category: "guild",
      description: "İsim-Yaş sistemini aç kapa yapar.",
    },
    {
      name: "tag",
      type: "tekil",
      category: "guild",
      display: "Taglı Simgesi",
      description: "Taglı modda ise buradan tag belirlenir.",
    },
    {
      name: "tagsiz",
      type: "tekil",
      category: "guild",
      display: "Tagsız Simgesi",
      description:
        "Sunucu içerisinde tagsız olan üyelerin üstünde bulunacak simge veya yazı.",
    },
    {
      name: "minYaş",
      type: "tekil",
      display: "Minimum Yaş",
      category: "register",
      description: "Sunucuya kayıt olabilecek en düşük yaş.",
    },
    {
      name: "serverName",
      type: "tekil",
      category: "guild",
      display: "Sunucu İsmi",
      description: "Sunucu ismini buradan belirlenir.",
    },
    {
      name: "taglıalım",
      type: "acmali",
      category: "guild",
      display: "Taglı Alım",
      description: "Taglı-Alım modunu aç kapa yapar.",
    },
    {
      name: "otoKayıt",
      type: "acmali",
      category: "guild",
      display: "Otomatik Kayıt",
      description:
        "Sunucudan çıkıp/giren üyeleri verilerinde kayıt bulunuyorsa otomatik kayıt yapar.",
    },
    {
      name: "otoIsim",
      type: "acmali",
      category: "guild",
      display: "Otomatik İsim Düzeltme",
      description:
        "Sunucudan çıkıp/giren üyelerin verisinde isim bulunuyorsa otomatik olarak isim düzenler.",
    },
    {
      name: "renkliBar",
      type: "acmali",
      category: "guild",
      display: "Renkli Bar",
      description:
        "Yetkili sisteminde otomatik olarak her kullanımda rengarenk bar şeklini alır kapalı ise otomatik olarak sabit renk kalır.",
    },
    {
      name: "kufurEngel",
      type: "acmali",
      category: "guild",
      display: "Küfür Engelleme",
      description: "Küfür engelleme modunu aç kapa yapar.",
    },
    {
      name: "reklamEngel",
      type: "acmali",
      category: "guild",
      display: "Reklam Engelleme",
      description: "Reklam engelleme modunu aç kapa yapar.",
    },
    {
      name: "spamEngel",
      type: "acmali",
      category: "guild",
      display: "Flood Engelleme",
      description: "Flood engelleme modunu aç kapa yapar.",
    },
    {
      name: "capsEngel",
      type: "acmali",
      category: "guild",
      display: "Caps-Lock Engelleme",
      description: "Caps-Lock engelleme modunu aç kapa yapar.",
    },
    {
      name: "chatİltifat",
      type: "acmali",
      category: "guild",
      display: "Sohbet İltifat",
      description:
        "Sunucuda bulunan tüm sohbet kanallarında belli süre sonra mesaj atan bir kullanıcıya iltifat eder.",
    },
    {
      name: "chatİzinliler",
      type: "kanallar",
      category: "guild",
      ctype: "ALL",
      display: "Sohbet İzinliler",
      description:
        "Belirlenen sohbetlerde flood, küfür, caps ve spamı göz ardı eder.",
    },

    {
      name: "welcomeSesKanalları",
      display: "Welcome botlarının ses kanalları",
      type: "kanallar",
      category: "channel",
      ctype: "VOICE",
      description: "Welcome botlarının gireceği ses kanalı.",
    },

    {
      name: "sayılıEmoji",
      type: "acmali",
      category: "guild",
      ctype: "ALL",
      display: "Sayılara Emoji",
      description:
        "Bu ayar açıldığında hoş geldin/istatistik gibi işlemlerde sayı yerine sayıyı belirten emoji belirir.",
    },
    {
      name: "otomatikTaşıma",
      type: "acmali",
      category: "guild",
      display: "Kayıt Sonrası Otomatik Taşıma",
      description:
        "Bu ayar açıldığından kayıt işlemi tamamlandıktan sonra otomatik olarak sohbet odalarına 5 saniye sonra taşıyacaktır",
    },
    {
      name: "otomatikSleep",
      type: "acmali",
      category: "guild",
      display: "Otomatik AFK Odası Taşıma",
      description:
        "Bu ayar açıldığından 10 dakika boyunca kulaklığı veya mikrofonu kapalı olan üyeleri otomatik olarak AFK odasına taşır.",
    },

    {
      name: "kayıtsızLimit",
      type: "tekil",
      category: "limit",
      display: "Kayıtsız Atma Limiti",
      description:
        "Kayıtsız yetkisine sahip yetkilinin belirli süre kayıtsız limitini belirler.",
    },
    {
      name: "muteLimit",
      type: "tekil",
      category: "limit",
      display: "Mute Atma Limiti",
      description:
        "Mute yetkisine sahip yetkilinin belirli süre Mute limitini belirler.",
    },
    {
      name: "voiceMuteLimit",
      type: "tekil",
      category: "limit",
      display: "Ses Mute Atma Limiti",
      description:
        "Mute yetkisine sahip yetkilinin belirli süre Mute limitini belirler.",
    },
    {
      name: "jailLimit",
      type: "tekil",
      category: "limit",
      display: "Jail Atma Limiti",
      description:
        "Jail yetkisine sahip yetkilinin belirli süre Jail limitini belirler.",
    },
    {
      name: "banLimit",
      type: "tekil",
      category: "limit",
      display: "Ban/Underworld Atma Limiti",
      description:
        "Ban(Underworld) yetkisine sahip yetkilinin belirli süre Ban(Underworld) limitini belirler.",
    },
    {
      name: "dugmeliKayit",
      type: "acmali",
      category: "register",
      display: "Düğmeli Kayıt Komutu",
      description:
        "Sunucuya kayıt alınırken bu sistem açık ise düğme ile tek komut şeklinde kayıt alınır kapalı ise cinsiyetler olarak ikiye ayrılır.",
    },
    {
      name: "teyitZorunlu",
      type: "acmali",
      category: "register",
      display: "Teyit Zorunluluğu",
      description:
        "Sunucuya kayıt alınırken bu sistem açık ise kayıt kanallarına giriş yapmadan kayıt işlemi yapılamaz.",
    },
    {
      name: "kayıtsızRolleri",
      type: "roller",
      category: "register",
      display: "Kayıtsız Rolleri",
      description: "Sunucuya girdiğinde üzerine verilecek rol(ler)",
    },
    {
      name: "erkekRolleri",
      type: "roller",
      category: "register",
      display: "Erkek Rolleri",
      description: "Sunucuya erkek olarak kayıt olduğunda alıcağı rol(ler)",
    },
    {
      name: "kadınRolleri",
      type: "roller",
      category: "register",
      display: "Kadın Rolleri",
      description: "Sunucuya kadın olarak kayıt olduğunda alıcağı rol(ler)",
    },
    {
      name: "teyitciRolleri",
      type: "roller",
      category: "register",
      display: "Teyitci Rolleri",
      description: "Sunucuda kayıt yetkisine sahip olacak rol(ler)",
    },
    {
      name: "tagRolü",
      type: "rol",
      category: "register",
      display: "Tag Rolü",
      description: "Taglı sistem açık ise bir üye tag aldığında verilecek rol.",
    },
    {
      name: "boosterRolü",
      type: "rol",
      category: "guild",
      display: "Booster Rolü",
      description:
        "Sunucu üzerinde bulunan Takviye yetkilerine ve ayrıcalıklarına sahip olacak rol.",
    },
    {
      name: "vipRolü",
      type: "rol",
      category: "role",
      display: "Özel (VIP) Üye Rolü",
      description:
        "Sunucu taglı-alım dahi olsa kayıtsıza düşmeyecek ve özel üyelere verilecek rol.",
    },
    {
      name: "kurucuRolleri",
      display: "Kurucu Rolleri",
      type: "roller",
      category: "role",
      description: "Sunucu üzerinde kurucu olarak belirlenen rol(ler)",
    },
    {
      name: "altYönetimRolleri",
      display: "Alt Yönetim Rolleri",
      type: "roller",
      category: "role",
      description: "Sunucu üzerinde alt yönetim olarak belirlenen rol(ler)",
    },
    {
      name: "yönetimRolleri",
      display: "Orta Yönetim Rolleri",
      type: "roller",
      category: "role",
      description: "Sunucu üzerinde yönetim olarak belirlenen rol(ler)",
    },
    {
      name: "üstYönetimRolleri",
      display: "Üst Yönetim Rolleri",
      type: "roller",
      category: "role",
      description: "Sunucu üzerinde üst yönetim olarak belirlenen rol(ler)",
    },
    {
      name: "underworldRolü",
      display: "Underworld Rolü",
      type: "rol",
      category: "punitives",
      description:
        "Sunucuda ban yerine kalıcı jail mantığı ile oluşturulan, Underworld sistemine verilecek rol.",
    },
    {
      name: "banHammer",
      display: "Underworld Atabilecek Roller",
      type: "roller",
      category: "punitives",
      description: "Sunucuda Underworldee gönderecek rol(ler)",
    },
    {
      name: "jailHammer",
      display: "Jail Atabilecek Roller",
      type: "roller",
      category: "punitives",
      description: "Sunucuda Jailee gönderecek rol(ler)",
    },
    {
      name: "voiceMuteHammer",
      display: "Ses Mute Atabilecek Roller",
      type: "roller",
      category: "punitives",
      description: "Sunucuda ses mutesi atabilecek rol(ler)",
    },
    {
      name: "muteHammer",
      display: "Mute Atabilecek Roller",
      type: "roller",
      category: "punitives",
      description: "Sunucuda mute atabilecek rol(ler)",
    },
    {
      name: "warnHammer",
      display: "Uyarı Atabilecek Roller",
      type: "roller",
      category: "punitives",
      description: "Sunucuda uyarı verebilecek rol(ler)",
    },
    {
      name: "muteRolü",
      display: "Susturuldu Rolü",
      type: "rol",
      category: "punitives",
      description: "Sunucuda metin kanallarında susturulduğunda verilecek rol",
    },
    {
      name: "jailRolü",
      display: "Cezalı Rolü",
      type: "rol",
      category: "punitives",
      description: "Sunucuda jail atılınca verilecek rol",
    },
    {
      name: "şüpheliRolü",
      display: "Şüpheli Rolü",
      type: "rol",
      category: "punitives",
      description:
        "Sunucuda 7 gün veya daha önce açılmış hesaplara verilecek rol",
    },
    {
      name: "yasaklıTagRolü",
      display: "Yasaklı Tag Rolü",
      type: "rol",
      category: "punitives",
      description:
        "Sunucuda yasaklı tag mevcut ise üstünde bulunan üyelere verilcek rol",
    },
    {
      name: "Katıldı",
      display: "Toplantı (Katıldı) Rolü",
      type: "rol",
      category: "guild",
      description:
        "Sunucuda toplantı sonu katılan üyelerin üzerine verilecek rol",
    },
    {
      name: "Yetkiler",
      display: "Sağda Gözüken Yetki Rolleri",
      type: "roller",
      category: "role",
      description: "Sunucuda bulunan Sağda görüken yetki rol(ler)",
    },
    {
      name: "sorunCozmeKategorisi",
      display: "Sorun Çözme Kategorisi",
      type: "kanal",
      category: "guild",
      ctype: "CATEGORY",
      description: "Sunucuda sorun çözme mevcut ise kategorisini seçin.",
    },
    {
      name: "sorunÇözmeciler",
      display: "Sorun Çözmeci Rolleri",
      type: "roller",
      category: "guild",
      description: "Sorun çözmeciler var ise rol(ler)",
    },
    {
      name: "yükselticiRoller",
      display: "Yetki Yükseltici Roller",
      type: "roller",
      category: "stat",
      description:
        "Tüm yetki role komut ile yerleştirecek ve limitsiz bi şekilde yerleştirecek rol(ler)",
    },
    {
      name: "limitliYükselticiRolleri",
      display: "Limitli Yetki Yükseltici Roller",
      type: "roller",
      category: "stat",
      description: "Sadece belirli role kadar yükseltebilecek limitli rol(ler)",
    },
    {
      name: "yükseltimSınırı",
      display: "Yetki Yükseltim Limiti",
      type: "tekil",
      category: "stat",
      description: "Belirli roller burada index numarasını girin.",
    },
    {
      name: "etkinlikKatılımcısı",
      display: "Etkinlik Katılımcısı Rolü",
      type: "rol",
      category: "guild",
      description:
        "Eğer ki otomatik sistem üzerinden kurulum yapmıyorsanız buradan etkinlik katılımcısını seçin.",
    },
    {
      name: "cekilisKatılımcısı",
      display: "Çekiliş Katılımcısı Rolü",
      type: "rol",
      category: "guild",
      description:
        "Eğer ki otomatik sistem üzerinden kurulum yapmıyorsanız buradan çekiliş katılımcısını seçin.",
    },
    {
      name: "TerfiLog",
      display: "Yetki Yükseltim Log Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "TEXT",
      description:
        "Bir yetkili otomatik şekilde yetki atladığında kayıt atacağı kanal.",
    },
    {
      name: "coinChat",
      display: "Ekonomi Oyunları Kanalları",
      type: "kanallar",
      category: "channel",
      ctype: "TEXT",
      description:
        "Bot üzerinde bulunan ekonomi komutlarını kullanabilecek kanal(lar)",
    },
    {
      name: "izinliKanallar",
      display: "Komut İzinli Kanallar",
      type: "kanallar",
      category: "channel",
      ctype: "TEXT",
      description: "Bot komutlarını sadece bu kanallar üzerinde kullansınlar.",
    },
    {
      name: "hoşgeldinKanalı",
      display: "Hoşgeldin Kanalı",
      type: "kanal",
      category: "register",
      ctype: "TEXT",
      description:
        "Bir üye sunucuya katıldığında otomatik olarak atıcağı kanal",
    },
    {
      name: "chatKanalı",
      display: "Chat Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "TEXT",
      description:
        "Sunucuda ekonomi oyunlarınını atacağı bir kanal belirlemelisin.",
    },
    {
      name: "kurallarKanalı",
      display: "Kurallar Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "TEXT",
      description:
        "Kurallar kanalınız ismi kurallar değil ise buradan seçim yapabilirsiniz.",
    },
    {
      name: "toplantıKanalı",
      display: "Toplantı Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "VOICE",
      description:
        "Toplantı kanalı seçmek zorunlu değil seçerseniz de sadece o kanalda toplantı gerçekleşir.",
    },
    {
      name: "etkinlikIzinliler",
      display: "Etkinlik Kategorileri",
      type: "kanallar",
      category: "channel",
      ctype: "CATEGORY",
      description:
        "Etkinlik modu açık ise sadece bu kanallarda puan ve ödül ver.",
    },
    {
      name: "davetKanalı",
      display: "Davet(Invite) Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "TEXT",
      description:
        "Biri sunucuya katıldığında kim tarafından davet edildiği kayıt altına alınacak kanal",
    },
    {
      name: "publicKategorisi",
      display: "Public Kategorisi",
      type: "kanal",
      category: "channel",
      ctype: "CATEGORY",
      description: "Sohbet odalarının kategorisini seçiniz.",
    },
    {
      name: "registerKategorisi",
      display: "Register Kategorisi",
      type: "kanal",
      category: "register",
      ctype: "CATEGORY",
      description: "Kayıt odalarının kategorisini seçiniz.",
    },
    {
      name: "streamerKategorisi",
      display: "Streamer Kategorisi",
      type: "kanal",
      category: "channel",
      ctype: "CATEGORY",
      description: "Yayın odalarının kategorisiniz seçiniz.",
    },
    {
      name: "musicRooms",
      display: "Müzik Kanalları",
      type: "kanallar",
      category: "channel",
      ctype: "VOICE",
      description:
        "Müzik odalarınız var ise belirtiniz yok ise es geçebilirsiniz.",
    },
    {
      name: "photoChatKanalı",
      display: "Görsel Chat Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "TEXT",
      description:
        "Bir kanal belirlerseniz sadece o kanalda resim dışında bir mesaj atılmayacaktır.",
    },
    {
      name: "spotifyKanalı",
      display: "Spotify Davet Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "TEXT",
      description:
        "Sohbet kanalına spotify daveti yasak olduğu için bir spotify kanalı belirleyerek oraya davet atılmasına yardımcı olursun.",
    },
    {
      name: "sleepRoom",
      display: "Sleep(AFK) Kanalı",
      type: "kanal",
      category: "channel",
      ctype: "VOICE",
      description:
        "Yayın ve sohbet odalarında belirli süre kulaklığı mikrofonu kapalı olan üyeleri otomatik olarak bu kanala taşır.",
    },
    {
      name: "başlangıçYetki",
      display: "Başlangıç Yetki",
      type: "rol",
      category: "role",
      description: "Yetkili olduğu gibi sağda vericek rol.",
    },
    {
      name: "altilkyetki",
      display: "Başlangıç Alt Yetki",
      type: "rol",
      category: "role",
      description:
        "Sunucuda tüm bot komutlarını kullanabilecek rol. Örn: Bot Command",
    },
    {
      name: "rolPanelRolleri",
      display: "Rol (Ver/Al) İzinli Roller",
      type: "roller",
      category: "role",
      description:
        "Rol (ver/al) komutunda verilip alınmasını istediğiniz rol(ler)",
    },
    {
      name: "sıralamaKanalı",
      display: "Sıralama Kanalı",
      type: "kanal",
      category: "stat",
      ctype: "TEXT",
      description:
        "Sunucunda haftanın ses ve mesaj sıralamasını istiyorum diyorsan burdan bir kanal seçmelisin.",
    },
    {
      name: "teyitSıralamaKanalı",
      display: "Teyit Sıralama Kanalı",
      type: "kanal",
      category: "stat",
      ctype: "TEXT",
      description:
        "Sunucunuzda genel en iyi teyit sıralaması istiyorsanız burdan bir kanal seçmelisiniz.",
    },
    {
      name: "yetkiliSıralamaKanalı",
      display: "Yetkili Sıralama Kanalı",
      type: "kanal",
      category: "stat",
      ctype: "TEXT",
      description:
        "Sunucunuzda genel en iyi yetkili çeken sıralaması istiyorsanız burdan bir kanal seçmelisiniz.",
    },
    {
      name: "taglıSıralamaKanalı",
      display: "Taglı Sıralama Kanalı",
      type: "kanal",
      category: "stat",
      ctype: "TEXT",
      description:
        "Sunucunuzda genel en iyi taglı çeken sıralaması istiyorsanız burdan bir kanal seçmelisiniz.",
    },
    {
      name: "yayınSıralamaKanalı",
      display: "Yayın Sıralama Kanalı",
      type: "kanal",
      category: "stat",
      ctype: "TEXT",
      description:
        "Sunucunuzda genel en iyi yayın açan sıralaması istiyorsanız burdan bir kanal seçmelisiniz.",
    },
    {
      name: "davetSıralamaKanalı",
      display: "Davet Sıralama Kanalı",
      type: "kanal",
      category: "stat",
      ctype: "TEXT",
      description:
        "Sunucunuzda genel en iyi davet sıralaması istiyorsanız burdan bir kanal seçmelisiniz.",
    },
    {
      name: "özelOda",
      display: "Özel Oda Sistemi",
      type: "acmali",
      category: "stat",
      description: "Özel oda sistemini açmak/kapatmak",
    },
    {
      name: "özelOdaOluştur",
      display: "Özel Oda Kategorisi",
      type: "kanal",
      category: "stat",
      ctype: "CATEGORY",
      description:
        "Özel oda sisteminin olacağı bir kategori seçiniz. Açtıysanız eğer o kategori içine bir metin kanalı açın ve oraya .özeloda komutunu kullanın.",
    },
    {
      name: "haftaBirincileri",
      display: "Hafta Birincileri Sistemi",
      type: "acmali",
      category: "stat",
      description:
        "Sıralama da haftanın ses/mesaj birincilerine rol vermek ister misin?",
    },
    {
      name: "haftaninBirinciRolü",
      display: "Hafta Birincileri Rolü",
      type: "rol",
      category: "stat",
      description: "Haftanın birincilerine verilecek rol.",
    },
    {
      name: "botSesKanalı",
      display: "Bot Ses Kanalı",
      type: "kanal",
      category: "guild",
      ctype: "VOICE",
      description: "Sunucunun botlarının gireceği ses kanalı.",
    },
    {
      name: "mazeretliRolü",
      display: "Mazeretli Rolü",
      type: "rol",
      category: "guild",
      description: "Sunucuda toplantıya mazereti olanlara verilecek rol.",
    },
    {
      name: "mazeretSorumlusu",
      display: "Mazeret Sorumlusu",
      type: "roller",
      category: "guild",
      description: "Mazeretli rolü verecek sorumlular rol(ler)",
    },
    {
      name: "dcCezalıRolü",
      display: "DC Cezalı Rolü",
      type: "rol",
      category: "punitives",
      description: "Doğruluk mu? Cesaretlik mi? oyunununa katılmayacak rol",
    },
    {
      name: "dcSorumlusu",
      display: "DC Sorumlusu",
      type: "roller",
      category: "guild",
      description: "Doğruluk mu? Cesaretlik mi? oyununun sorumluları rol(ler)",
    },
    {
      name: "vkCezalıRolü",
      display: "VK Cezalı Rolü",
      type: "rol",
      category: "punitives",
      description: "Vampir Köylü oyunununa katılmayacak rol",
    },
    {
      name: "vkSorumlusu",
      display: "VK Sorumlusu",
      type: "roller",
      category: "guild",
      description: "Vampir Köylü oyunun sorumluları rol(ler)",
    },
    {
      name: "streamerCezalıRolü",
      display: "Streamer Cezalı Rolü",
      type: "rol",
      category: "punitives",
      description: "Yayın odalarına katılamayacak rol(ler)",
    },
    {
      name: "streamerSorumlusu",
      display: "Streamer Sorumlusu",
      type: "roller",
      category: "guild",
      description: "Yayın odalarının sorumluları rol(ler)",
    },
    {
      name: "etkinlikCezalıRolü",
      display: "Etkinlik Cezalı Rolü",
      type: "rol",
      category: "punitives",
      description: "Etkinliklere katılamayacak rol",
    },
    {
      name: "etkinlikSorumlusu",
      display: "Etkinlik Sorumlusu",
      type: "roller",
      category: "guild",
      description: "Etkinlik sorumluları rol(ler)",
    },
    {
      name: "yasaklıRoller",
      display: "Sağ Tık(Ver/Al) Yasaklı Roller",
      type: "roller",
      category: "role",
      description:
        "Sunucuda Sağ-tık bot sahibi ve sunucu sahibi dışında verilmeyecek rol(ler)",
    },
    {
      name: "yetkiliYasaklıTag",
      display: "Yetkili Yasaklı Tag",
      type: "cogul",
      category: "guild",
      description:
        "Bir yetkili üstüne burda bulunan sembollerden aldığında otomatik olarak yetkisi çekilir.",
    },
    {
      name: "seviyeSistemi",
      display: "Seviye Sistemi",
      type: "acmali",
      category: "guild",
      description: "Sunucuda ses/mesaj seviyeleri olsun mu?",
    },
    {
      name: "çekilişHakkı",
      display: "Çekiliş Komutu",
      type: "roller",
      category: "role",
      description: "Sunucuda .çekiliş komutunu kullanacak rol(ler)",
    },
    {
      name: "sorumlulukLog",
      display: "Liderlik / Sorumluluk Puan Bilgi Kanalı",
      type: "kanal",
      category: "channel",
      description:
        "Eğer ki site üzerinde lider veya sorumluluk rolleri girildiyse belirtilen kanala otomatik puanlama bilgileri atılır.",
    },
    {
      name: "özelRoller",
      type: "roller",
      category: "guild",
      display: "İsim Değiştirme Komutu Kullanacaklar",
      description:
        "Sunucu da bulunan boosterlara özel isim değiştirme özelliğini komut veya kontrol panelinden düzenleme izni verir veya özel ürünler için de kullanabilirsiniz.",
    },
  ],
};
