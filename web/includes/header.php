<?php 
if(isset($var) && isset($_SESSION['Username'])) {
	$d1 = new DateTime();
	$d2 = new DateTime($dk['timeout']);			
} else {
	echo "<script type='text/javascript'>window.top.location='https://localhost/login';</script>"; exit;
}
?>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<div class="nav-header">
            <a href="anasayfa" class="brand-logo">
				<svg class="logo-abbr" width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg">
					<rect class="svg-logo-rect" width="48" height="48" rx="20" fill="#23272a"/>
					<path fill="#FF4081" d="M10.5,17.5l0.5-0.9l21.7,21.9L32.3,39h-0.5L10.5,17.5z M34,39H14v3h20V39z"/><path fill="#9C27B0" d="M37.4,30.7l-0.5,0.9L15.3,9.5L15.6,9h0.6L37.4,30.7z M32.3,39l1.7,3l11-18h-3.5L32.3,39z"/><path fill="#00BCD4" d="M34,9H14V6h20V9z M32.3,9h-0.6L10.4,30.4l0.5,0.9L32.6,9.5L32.3,9z"/><path fill="#FFC107" d="M15.6,9L5.5,25.6L3,24L14,6L15.6,9z M32.6,9.4L32.3,9h-1.7l-19,6.6l-0.8,1.3L32.6,9.4z"/><path fill="#FF5722" d="M15.7,39L14,42L3,24h3.5L15.7,39z M16,31V9h-0.4L15,10v21h-4.2l0.6,1H15v5.9l0.7,1.1H16v-7h20.6l0.6-1H16z"/><path fill="#03A9F4" d="M36.7,16.2L15.5,38.7l0.2,0.3h0.9l20.5-21.8L31.7,39h0.7l0.6-1l5-19.8L36.7,16.2z M41.5,24L32.3,9L34,6l11,18H41.5z"/>
				</svg>
				<div class="brand-title">
					<h2 class="logo-text" style="padding: 10px; padding-top: 15px;">apollon</h2>

				</div>
            </a>
			
            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
		<script>getNotifications(), paymentCheck()</script>
<div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
							<div class="input-group search-area right d-lg-inline-flex d-none">
								<h6 class="mb-1" id="sunucuAra">Sunucu: Bağlanıyor! <span class="badge bg-warning"><i class="fa-solid fa-globe fa-beat-fade" style="--fa-beat-fade-opacity: 0.1; --fa-beat-fade-scale: 1.25"></i></span></h6>
							</div>
                        </div>
                        <ul class="navbar-nav header-right main-notification">
						<li class="nav-item dropdown notification_dropdown">
                               						

						<li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link  ai-icon" href="javascript:void(0)" role="button" data-toggle="dropdown">
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.75 15.8385V13.0463C22.7471 10.8855 21.9385 8.80353 20.4821 7.20735C19.0258 5.61116 17.0264 4.61555 14.875 4.41516V2.625C14.875 2.39294 14.7828 2.17038 14.6187 2.00628C14.4546 1.84219 14.2321 1.75 14 1.75C13.7679 1.75 13.5454 1.84219 13.3813 2.00628C13.2172 2.17038 13.125 2.39294 13.125 2.625V4.41534C10.9736 4.61572 8.97429 5.61131 7.51794 7.20746C6.06159 8.80361 5.25291 10.8855 5.25 13.0463V15.8383C4.26257 16.0412 3.37529 16.5784 2.73774 17.3593C2.10019 18.1401 1.75134 19.1169 1.75 20.125C1.75076 20.821 2.02757 21.4882 2.51969 21.9803C3.01181 22.4724 3.67904 22.7492 4.375 22.75H9.71346C9.91521 23.738 10.452 24.6259 11.2331 25.2636C12.0142 25.9013 12.9916 26.2497 14 26.2497C15.0084 26.2497 15.9858 25.9013 16.7669 25.2636C17.548 24.6259 18.0848 23.738 18.2865 22.75H23.625C24.321 22.7492 24.9882 22.4724 25.4803 21.9803C25.9724 21.4882 26.2492 20.821 26.25 20.125C26.2486 19.117 25.8998 18.1402 25.2622 17.3594C24.6247 16.5786 23.7374 16.0414 22.75 15.8385ZM7 13.0463C7.00232 11.2113 7.73226 9.45223 9.02974 8.15474C10.3272 6.85726 12.0863 6.12732 13.9212 6.125H14.0788C15.9137 6.12732 17.6728 6.85726 18.9703 8.15474C20.2677 9.45223 20.9977 11.2113 21 13.0463V15.75H7V13.0463ZM14 24.5C13.4589 24.4983 12.9316 24.3292 12.4905 24.0159C12.0493 23.7026 11.716 23.2604 11.5363 22.75H16.4637C16.284 23.2604 15.9507 23.7026 15.5095 24.0159C15.0684 24.3292 14.5411 24.4983 14 24.5ZM23.625 21H4.375C4.14298 20.9999 3.9205 20.9076 3.75644 20.7436C3.59237 20.5795 3.50014 20.357 3.5 20.125C3.50076 19.429 3.77757 18.7618 4.26969 18.2697C4.76181 17.7776 5.42904 17.5008 6.125 17.5H21.875C22.571 17.5008 23.2382 17.7776 23.7303 18.2697C24.2224 18.7618 24.4992 19.429 24.5 20.125C24.4999 20.357 24.4076 20.5795 24.2436 20.7436C24.0795 20.9076 23.857 20.9999 23.625 21Z" fill="#EB8153"/>
									</svg>
									<span class="badge light text-white bg-primary rounded-circle" id="nofi_count">0</span>
                                </a>
								<div class="dropdown-menu dropdown-menu-right p-3">
									<div id="DZ_W_TimeLine11" class="widget-timeline dz-scroll style-1 height370">
									Bildirimler<button onclick="getNotifications(true);" style="border-radius: 8px; width: 18px; height: 18px; padding: 0px; margin-left: 8px; font-size:16px; margin-bottom: 12px; color: whitesmoke;" class="btn btn-transparent"><i class="fa-solid fa-trash" tag="Bildirimleri Temizle!"></i></button>
										<ul class="timeline" id="nofi_list">
										
										</ul>
									</div>
								</div>
                            </li>
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <img src="<?php 
									if($var["photo"]) {
										echo $var["photo"];
									} else 
									{
										echo 'images/profile/pic1.jpg';
									}
								
									?>" width="20" alt=""/>
									<div class="header-info">
										<span><?php echo '' . $var['username'] . ''; ?></span>
						
										<small><?php 
											if($var['type'] == "STAFF") {
												echo 'apollon Yöneticisi';
											} 
											else
											{
												echo 'apollon Kullanıcı';
											}
										?></small>
										
									</div>
									
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
								<a href="./profile" class="dropdown-item ai-icon">
								<svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span class="ml-2">Profil</span>
                                    </a>
                                    <a href="./login?logout" class="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="https://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span class="ml-2">Çıkış Yap</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
<div class="deznav">
<div class="deznav-scroll">
<div class="main-profile">
	
					<img class="rounded" width="200px" src="<?php 
									if($var["photo"]) {
										echo $var["photo"];
									} else 
									{
										echo 'images/profile/pic1.jpg';
									}
								
									?>" alt="">
					</br>
							
					Hoş Geldin!
					<h6 class="mb-0 fs-20 text-black ">Sn. <?php   echo '' . $var['name']. ' ' . $var['surname'] . ''; ?></h6>
					<div style="padding: 8px;" style="border: 1px;	border-color: white;">
						<span class="badge badge badge-outline-primary" id="" style="padding: 4px; font-size: 13px; border-radius: 5px 0px 0px 5px">₺</span>
						<span class="badge badge badge-outline-secondary" id="para" style="padding: 4px; font-size: 13px; border-radius: 0px"></span>
						<span class="badge badge badge-outline-success" style="padding: 4px; font-size: 13px; border-radius: 0px 5px 5px 0px"> <a href="#s" class="fa fa-hand-holding-usd"> </a></span>
					</div>
				</div>
				<ul class="metismenu" id="menu">
                    <li>
						<a href="anasayfa" class="ai-icon" aria-expanded="false">
						<i class="flaticon-141-home"></i>
						<span class="nav-text">Ana Sayfa</span>
						</a>
					</li>
                    <li>
						<a href="bot-status" class="ai-icon" aria-expanded="false">
						<i class="flaticon-001-monitor"></i>
						<span class="nav-text">Bot Monitörü</span>
						</a>
					</li>
					<li>
						<a href="package-manage" class="ai-icon" aria-expanded="false">
						<i class="flaticon-008-credit-card"></i>
						<span class="nav-text">Paket Yönetimi</span>
						</a>
					</li>

					<li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
						<i class="flaticon-061-puzzle"></i>
							<span class="nav-text">Sunucu Yönetimi</span>
						</a>
                        <ul aria-expanded="false">
							<li><a href="punitives-manage">Ceza Yönetimi</a></li>
							<li><a href="emoji-manage">Emoji Yönetimi</a></li>
							<li><a href="task-manage">Görev Yönetimi</a></li>
							<li><a href="staff-manage">Yetkili Yönetimi</a></li>
							<li><a href="users-manage">Kullanıcı Yönetimi</a></li>
							<li><a href="stat-manage">İstatistik Yönetimi</a></li>
							<li><a href="responsibility-manage">Sorumluluk Yönetimi</a></li>
							<li><a href="shop-manage">Mağaza Yönetimi</a></li>
							<li><a href="channel-manage">Kanal Yönetimi</a></li>
							<li><a href="role-manage">Rol Yönetimi</a></li>
                        </ul>
                    </li>
					<li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
						<i class="flaticon-073-settings"></i>
							<span class="nav-text">Genel Bot Ayarları</span>
						</a>
                        <ul aria-expanded="false">
							<li><a href="emoji-settings">Emoji Ayarları</a></li>
							<li><a href="stat-settings">İstatistik Ayarları</a></li>
                            <li><a href="setup-settings">Kurulum Ayarları</a></li>
							<li><a href="guard-settings">Güvenlik Ayarları</a></li>
							<li><a href="subcom-manage">Alt Komut Ayarları</a></li>
							<li><a href="pcom-manage">Özel Komut Ayarları</a></li>
							<li><a href="select-manage">Seçmeli Menü Ayarları</a></li>
							<li><a href="welcome-settings">Hoşgeldin Ayarları</a></li>
                        </ul>
                    </li>
					<?php 
											if($var['type'] == "STAFF") {
												echo '<li class="nav-label"></li>
												<li>
												<a href="notify-manage" class="ai-icon" aria-expanded="false">
												<i class="flaticon-082-alarm-1"></i>
												<span class="nav-text">Bildirim Merkezi <span class="badge bg-primary" style="color:whitesmoke; font-size:12px; padding: 1px;">YÖNETİCİ</span></span>
												</a>
											</li>
											<li>
											<a href="s-users-manage" class="ai-icon" aria-expanded="false">
											<i class="flaticon-381-user-9"></i>
											<span class="nav-text">Kullanıcılar</span>
											</a>
										</li>
										<li>
										<a href="s-package-manage" class="ai-icon" aria-expanded="false">
										<i class="flaticon-381-diamond"></i>
										<span class="nav-text">Paket Yönetimi</span>
										</a>
									</li>
									';
											} 
											
										?>
                </ul>
						</div>
            </div>
			<script>parayaÇevirAMK("<?php   echo '' . $var['balance'] . ''; ?>")</script>
			<div class="sidebar-right">
  <div class="bg-overlay"></div>
  <a class="btn text-white mb-2 sidebar-right-trigger wave-effect wave-effect-x" href="./profile" style="padding: 1px; background-color: #191e3a">
    <span>
      <i class="fa fa-cog fa-spin"></i>
    </span>
										</a>
  <a class="sidebar-close-trigger" href="./profile">
    <span>
      <i class="la-times las"></i>
    </span>
  </a>
</div>