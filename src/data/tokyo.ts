import type { CityData } from './types';

export const tokyo: CityData = {
  name: 'Tokyo',
  slug: 'tokyo',
  dates: 'May 4–9, 2026',
  nights: 5,
  tagline: 'Ancient temples, neon-lit crossings and some of the world\'s most extraordinary food',
  accentColor: '#C9243F',
  mapCenter: { lat: 35.6762, lng: 139.6503 },
  mapZoom: 12,
  mapPoints: [
    { name: 'Senso-ji Temple', type: 'attraction', lat: 35.7148, lng: 139.7967 },
    { name: 'Shibuya Crossing', type: 'attraction', lat: 35.6595, lng: 139.7004 },
    { name: 'Meiji Shrine', type: 'attraction', lat: 35.6764, lng: 139.6993 },
    { name: 'Tsukiji Outer Market', type: 'attraction', lat: 35.6654, lng: 139.7707 },
    { name: 'teamLab Planets Toyosu', type: 'attraction', lat: 35.6476, lng: 139.7955 },
    { name: 'Tokyo Skytree', type: 'attraction', lat: 35.7101, lng: 139.8107 },
    { name: 'Shinjuku Gyoen', type: 'attraction', lat: 35.6851, lng: 139.7101 },
    { name: 'Ueno Park', type: 'attraction', lat: 35.7137, lng: 139.7741 },
    { name: 'Yanaka Ginza', type: 'attraction', lat: 35.7230, lng: 139.7700 },
    { name: 'Aman Tokyo', type: 'hotel', lat: 35.6816, lng: 139.7533 },
    { name: 'Park Hyatt Tokyo', type: 'hotel', lat: 35.6851, lng: 139.6912 },
    { name: 'Dormy Inn Premium Shibuya', type: 'hotel', lat: 35.6572, lng: 139.7020 },
    { name: 'Shinjuku Washington Hotel', type: 'hotel', lat: 35.6918, lng: 139.6970 },
    { name: 'Sushi Saito', type: 'restaurant', lat: 35.6603, lng: 139.7316 },
    { name: 'Ichiran Shinjuku', type: 'restaurant', lat: 35.6922, lng: 139.7003 },
    { name: 'Gonpachi Nishi-Azabu', type: 'restaurant', lat: 35.6607, lng: 139.7280 },
    { name: 'Tsuta Ramen', type: 'restaurant', lat: 35.6912, lng: 139.7019 },
    { name: 'Uobei Shibuya', type: 'restaurant', lat: 35.6594, lng: 139.6985 },
  ],
  days: [
    {
      dayNum: 1,
      date: 'Mon, May 4',
      title: 'Arriving from the Mountains',
      activities: [
        {
          description: 'Arrive at Shinjuku Station via Azusa express from Kobuchizawa (~2 hours). The contrast from Highland silence to Shinjuku\'s 3.5 million daily passengers is immediate and exhilarating.',
          mapUrl: 'https://maps.google.com/?q=Shinjuku+Station+Tokyo',
        },
        {
          description: 'Check in to your Shinjuku or Nishi-Shinjuku hotel. Drop luggage and refresh — the room will feel cool and modern after three nights of rustic Highland pensions.',
        },
        {
          description: 'Golden Hour walk through Shinjuku: Takashimaya Times Square, the Memory Lane (Omoide Yokocho) alley of tiny yakitori stalls, and up to the Shinjuku Government Building observation deck (free, closes 22:30) for twilight city views.',
          mapUrl: 'https://maps.google.com/?q=Shinjuku+Tokyo',
        },
        {
          description: 'Dinner at Ichiran Shinjuku: solo ramen booths where you customise every element — broth richness, noodle firmness, spice level — via a paper form. One of Tokyo\'s most iconic food experiences. No Japanese required.',
          url: 'https://en.ichiran.com/',
          mapUrl: 'https://maps.google.com/?q=Ichiran+Ramen+Shinjuku',
        },
        {
          description: 'Late evening option: Shinjuku Golden Gai — a labyrinth of 200 micro-bars each seating 5–8 people. Choose one, pay the cover charge (~¥500–1,000) and enjoy a nightcap with locals.',
        },
      ],
      translations: {
        ja: {
          title: '山から東京へ',
          activities: [
            '小淵沢から新宿へあずさ特急で約2時間。山の静寂から新宿の喧騒へ——一日乗客340万人の駅に到着した瞬間のコントラストが強烈。',
            '新宿または西新宿のホテルにチェックイン。荷物を置いて気持ちを切り替える。',
            'ゴールデンアワーの新宿散策：タカシマヤタイムズスクエア、思い出横丁の小さな焼き鳥スタンド、新宿都庁展望台からの夕暮れ（無料、22:30閉館）。',
            '夕食は一蘭新宿店：紙の記入式で自分だけのラーメンをカスタマイズ。東京を代表するフード体験のひとつ。',
          ],
        },
        zh: {
          title: '從山間抵達東京',
          activities: [
            '從小淵澤乘梓號特急抵達新宿約2小時，從山間靜謐瞬間切換至一日340萬人次的新宿站——這種強烈對比令人震撼。',
            '入住新宿或西新宿飯店，放下行李調整心情。',
            '黃昏時分的新宿漫步：高島屋Times Square、思い出橫丁小燒鳥攤、新宿都廳展望台觀賞暮色（免費，22:30關閉）。',
            '晚餐前往一蘭新宿店，以紙張記入方式打造專屬拉麵，體驗東京最具代表性的美食之一。',
          ],
        },
      },
    },
    {
      dayNum: 2,
      date: 'Tue, May 5',
      title: 'Asakusa, Skytree & Akihabara',
      activities: [
        {
          description: 'Arrive at Senso-ji Temple by 07:30 before the tourist crowds. The Kaminarimon gate, Nakamise shopping street and the five-storey pagoda are magnificent in the early morning light.',
          url: 'https://www.senso-ji.jp/',
          mapUrl: 'https://maps.google.com/?q=Senso-ji+Temple+Asakusa+Tokyo',
        },
        {
          description: 'Explore Nakamise shopping arcade for traditional omiyage: ningyo-yaki (character-shaped cakes), kaminari-okoshi (puffed-rice brittle), and washi paper goods.',
          mapUrl: 'https://maps.google.com/?q=Nakamise+Dori+Asakusa',
        },
        {
          description: 'Walk 10 minutes to Tokyo Skytree (634 m — world\'s tallest tower). Take the express elevator to the Tembo Deck at 350 m. On clear May days, Mt. Fuji is visible to the west.',
          url: 'https://www.tokyo-skytree.jp/en/',
          mapUrl: 'https://maps.google.com/?q=Tokyo+Skytree',
        },
        {
          description: 'Afternoon in Akihabara: the world\'s densest concentration of electronics, anime merchandise, retro game centres and maid cafes. Browse multi-floor electronics at Yodobashi Akiba or dive into retro gaming at Super Potato.',
          mapUrl: 'https://maps.google.com/?q=Akihabara+Tokyo',
        },
        {
          description: 'Dinner in Akihabara or return to Shinjuku for the evening. Consider Tsuta Ramen on the Shinjuku side — the world\'s first Michelin-starred ramen shop, limited seats.',
        },
      ],
      translations: {
        ja: {
          title: '浅草と下町文化',
          activities: [
            '早朝の浅草・浅草寺へ。観光客が少ない朝6〜8時の境内は格別の雰囲気。五重塔と雷門の前で記念撮影。',
            '仲見世通りのショッピング：人形焼き、雷おこし、扇子などの伝統的なお土産を探す。',
            '東京スカイツリー（634m）へ。晴れた日は富士山も見える展望台。午前中は比較的空いている。',
            '午後は秋葉原へ。電子機器、アニメグッズ、レトロゲームが揃うユニークな街歩き。',
          ],
        },
        zh: {
          title: '淺草與下町文化',
          activities: [
            '清晨前往淺草・淺草寺，早上6〜8時遊客稀少的境內氛圍絕佳，在五重塔和雷門前留念合影。',
            '仲見世通購物：尋找人形燒、雷神餅、扇子等傳統紀念品。',
            '前往東京晴空塔（634公尺），晴天時展望台可見富士山，上午相對不擁擠。',
            '下午前往秋葉原，遊逛電子產品、動漫周邊和復古遊戲的獨特街區。',
          ],
        },
      },
    },
    {
      dayNum: 3,
      date: 'Wed, May 6',
      title: 'Harajuku, Omotesando & Shibuya',
      activities: [
        {
          description: 'Morning at Meiji Shrine: a vast forested sanctuary in the heart of Harajuku. The 70-metre torii gate, forested approach path and sake barrel display are serene even on busy Golden Week days.',
          url: 'https://www.meijijingu.or.jp/en/',
          mapUrl: 'https://maps.google.com/?q=Meiji+Shrine+Tokyo',
        },
        {
          description: 'Takeshita Street (Takeshita Dori): Harajuku\'s famous teen fashion lane. Crepe shops, vintage stores, and wildly creative street fashion. Busiest on weekends — arrive by 10:30 to beat peak crowds.',
          mapUrl: 'https://maps.google.com/?q=Takeshita+Street+Harajuku',
        },
        {
          description: 'Omotesando Avenue: Tokyo\'s Champs-Elysées — a tree-lined boulevard of flagship architect-designed boutiques (Prada by Herzog & de Meuron, Tod\'s by Toyo Ito). Browse or window-shop, then rest at one of the terrace cafes.',
          mapUrl: 'https://maps.google.com/?q=Omotesando+Tokyo',
        },
        {
          description: 'Lunch at one of Omotesando\'s side-street restaurants — look for the covered Omotesando Hills complex basement food hall or venture into Cat Street for independent cafes.',
        },
        {
          description: 'Shibuya at dusk: position yourself at the Starbucks or the newer Mag\'s Park rooftop viewing area above the Shibuya Crossing. When the lights turn red in all directions and 3,000 people cross simultaneously, it\'s one of the most extraordinary urban spectacles on earth.',
          mapUrl: 'https://maps.google.com/?q=Shibuya+Crossing+Tokyo',
        },
      ],
      translations: {
        ja: {
          title: '原宿・渋谷・表参道',
          activities: [
            '明治神宮の早朝参拝。都心とは思えない静けさの中、巨木に囲まれた参道を歩く。',
            '竹下通りでポップカルチャーを満喫。クレープ、原宿ファッション、インスタ映えスイーツが揃う。',
            '表参道のハイエンドショッピング。コム・デ・ギャルソン、イッセイ ミヤケなど日本デザイナーブランドを巡る。',
            '夕暮れの渋谷スクランブル交差点。世界最大の交差点を体験——夕方のラッシュ時は一回の青信号で数千人が渡る。',
          ],
        },
        zh: {
          title: '原宿・澀谷・表參道',
          activities: [
            '清晨參拜明治神宮，穿越大樹環繞的參道，感受難以置信的都心靜謐。',
            '在竹下通暢遊流行文化，享用可麗餅、體驗原宿時尚和打卡甜點。',
            '表參道高端購物，造訪川久保玲、三宅一生等日本設計師品牌。',
            '傍晚體驗澀谷十字路口，感受全球最大路口——尖峰時刻每次綠燈有數千人同時穿越。',
          ],
        },
      },
    },
    {
      dayNum: 4,
      date: 'Thu, May 7',
      title: 'Tsukiji, teamLab & Odaiba',
      activities: [
        {
          description: 'Early breakfast at Tsukiji Outer Market (07:00–08:30): the outer market still thrives post-relocation with dozens of tiny seafood breakfast stalls. Order tamagoyaki (thick grilled egg), fresh oysters, and the freshest tuna sashimi in the world.',
          url: 'https://www.tsukiji.or.jp/',
          mapUrl: 'https://maps.google.com/?q=Tsukiji+Outer+Market+Tokyo',
        },
        {
          description: 'teamLab Planets Toyosu (book ahead — Golden Week sells out entirely). The immersive digital art space with mirrored infinity rooms, petal rain installations and the wading-pool digital koi pond is genuinely breathtaking. Allow 90 minutes.',
          url: 'https://planets.teamlab.art/tokyo/',
          mapUrl: 'https://maps.google.com/?q=teamLab+Planets+Toyosu+Tokyo',
        },
        {
          description: 'Cross to Odaiba by the Yurikamome driverless monorail (a ride worth taking for the Rainbow Bridge views). Explore the artificial island: TeamLab Borderless site, beach park, and the life-size 1:1 Gundam statue.',
          mapUrl: 'https://maps.google.com/?q=Odaiba+Tokyo',
        },
        {
          description: 'Dinner at Gonpachi Nishi-Azabu — the four-storey izakaya that inspired the House of Blue Leaves set in Kill Bill Vol. 1. The atmosphere is unmatched: order skewers, edamame, and Sapporo draft beer on the second-floor balcony.',
          url: 'https://gonpachi.jp/nishi-azabu/',
          mapUrl: 'https://maps.google.com/?q=Gonpachi+Nishi-Azabu+Tokyo',
        },
      ],
      translations: {
        ja: {
          title: '築地・チームラボ・お台場',
          activities: [
            '築地場外市場の朝食。新鮮な海鮮丼、玉子焼き、抹茶スイーツを食べ歩きながら市場を探索。',
            'チームラボ プラネッツ（豊洲）。水に足を浸しながら歩く没入型デジタルアート空間。事前オンライン購入必須。',
            'お台場でアフタヌーン。レインボーブリッジと東京湾の眺め、ダイバーシティ東京でガンダム像。',
            '夕食は権八 西麻布。「キル・ビル」の世界観を楽しみながら焼き鳥と日本酒を。',
          ],
        },
        zh: {
          title: '築地・teamLab・台場',
          activities: [
            '築地場外市場早餐，邊逛市場邊品嚐新鮮海鮮丼、玉子燒和抹茶甜點。',
            'teamLab Planets（豐洲），赤腳行走於沉浸式數位藝術空間，需提前在線購票。',
            '下午遊覽台場，欣賞彩虹橋和東京灣景色，前往多元城東京觀賞鋼彈像。',
            '晚餐前往権八 西麻布，在《追殺比爾》的氛圍中享用燒鳥和日本酒。',
          ],
        },
      },
    },
    {
      dayNum: 5,
      date: 'Fri, May 8',
      title: 'Old Tokyo: Yanaka & Ueno',
      activities: [
        {
          description: 'Morning stroll through Yanaka Ginza — Tokyo\'s best-preserved pre-war shotengai (shopping street). Browse vintage shops, handcraft studios and an extraordinary concentration of cat-themed goods (the neighbourhood is famous for its street cats).',
          mapUrl: 'https://maps.google.com/?q=Yanaka+Ginza+Tokyo',
        },
        {
          description: 'Visit Yanaka Cemetery\'s cherry blossom avenue and ancient Buddhist temples. In May, fresh green leaves canopy the lanes between traditional wooden machiya townhouses.',
        },
        {
          description: 'Ueno Park: Tokyo\'s great public museum park. Visit the Tokyo National Museum (Japan\'s oldest and largest, featuring the world\'s largest collection of Japanese art) or the National Museum of Nature and Science.',
          url: 'https://www.tnm.jp/?lang=en',
          mapUrl: 'https://maps.google.com/?q=Ueno+Park+Tokyo',
        },
        {
          description: 'Optional: Sushi Saito in Roppongi for an omakase lunch (requires reservation months in advance). Alternatively, explore the Roppongi Art Triangle: Mori Art Museum, National Art Center and Suntory Museum of Art.',
          url: 'https://mori.art.museum/en/',
        },
        {
          description: 'Evening at Shinjuku Gyoen National Garden (open until 20:00 in summer). The 58-hectare park blends French formal, English landscape and Japanese garden styles — stunning even in late May as irises come into bloom.',
          url: 'https://www.env.go.jp/garden/shinjukugyoen/english/',
          mapUrl: 'https://maps.google.com/?q=Shinjuku+Gyoen+Tokyo',
        },
      ],
      translations: {
        ja: {
          title: '谷中・上野・新宿御苑',
          activities: [
            '谷中銀座の下町散策。江戸時代の風情が残る路地を歩き、昔ながらの商店や猫だらけの路地を楽しむ。',
            '上野公園と東京国立博物館。日本最古・最大の博物館に所蔵される国宝や重要文化財を鑑賞。',
            '新宿御苑（開園時間に注意）。都心のオアシスで季節の花を楽しむ。入園料200円とリーズナブル。',
            '最後の夜は思い出横丁や新宿のバー街で締めくくり。日本のサラリーマン文化を垣間見る。',
          ],
        },
        zh: {
          title: '谷中・上野・新宿御苑',
          activities: [
            '漫步谷中銀座下町，穿越保留江戶時代風情的小巷，享受傳統商店和貓咪街道的樂趣。',
            '參觀上野公園和東京國立博物館，欣賞日本最古老、最大博物館所藏的國寶和重要文化財。',
            '前往新宿御苑（注意開放時間）在都心綠洲中欣賞當季花卉，入園費僅200日圓非常實惠。',
            '最後一夜在思い出橫丁或新宿酒吧街畫下句點，一窺日本上班族文化。',
          ],
        },
      },
    },
    {
      dayNum: 6,
      date: 'Sat, May 9',
      title: 'Last Morning & Departure',
      activities: [
        {
          description: 'Final morning in Shimokitazawa — Tokyo\'s most beloved bohemian neighbourhood. Explore the dense network of vintage clothing shops, independent bookstores, coffee roasters and live music venues. Perfect for a slow last breakfast.',
          mapUrl: 'https://maps.google.com/?q=Shimokitazawa+Tokyo',
        },
        {
          description: 'Last ramen or teishoku set lunch before heading to the airport. The Shimokitazawa area has excellent neighbourhood restaurants away from tourist pricing.',
        },
        {
          description: 'For Narita Airport (NRT): take the Narita Express (N\'EX) from Shinjuku (~80 minutes). For Haneda (HND): take the Keikyu Line from Shinagawa (~30 minutes). Allow at least 3 hours before international departure.',
          url: 'https://www.jreast.co.jp/e/nex/',
        },
        {
          description: 'Final tip: use any remaining Suica/PASMO IC card balance at convenience store vending machines or Family Mart — you can refund the deposit at the airport before departure.',
        },
      ],
      translations: {
        ja: {
          title: '最終日・出発',
          activities: [
            '下北沢で最後のショッピング。ヴィンテージ古着、インディーズ音楽、個性的な古本屋が集まる若者の聖地。',
            '日本での最後の食事をゆっくりと。行列のできる人気ラーメン店や天ぷら屋でランチ。',
            'コンビニで最後のお土産。日本のコンビニスイーツ（ファミチキ、プリン、メロンパン）を堪能。',
            '成田または羽田へ。京成スカイライナー（成田・約40分）またはモノレール（羽田・約25分）で空港へ。',
          ],
        },
        zh: {
          title: '最終日・出發',
          activities: [
            '在下北澤進行最後的購物，這裡匯聚古著店、獨立音樂和特色二手書店，是年輕人的聖地。',
            '悠閒享用在日本的最後一餐，在排隊人氣拉麵店或天婦羅餐廳享用午餐。',
            '在便利商店採購最後的伴手禮，品嚐日本超商甜點（炸雞、布丁、哈密瓜麵包）。',
            '前往成田或羽田機場，搭乘京成Skyliner（成田，約40分鐘）或單軌電車（羽田，約25分鐘）。',
          ],
        },
      },
    },
  ],
  hotels: [
    {
      name: 'Aman Tokyo',
      rating: 4.9,
      ratingCount: '820 reviews',
      price: '¥¥¥',
      priceLabel: 'From ¥120,000/night',
      tags: ['Ultra-luxury', 'Otemachi', 'Spa', 'Sky views', 'Iconic'],
      description: 'Arguably the finest urban hotel in Japan — Aman Tokyo occupies six floors near the top of the Otemachi Tower, with 84 rooms averaging 80 sqm. The aesthetic is a masterclass in wabi-sabi luxury: shoji screens, volcanic stone bathrooms and unobstructed views of the Imperial Palace Gardens and Mt. Fuji on clear days. The pool, onsen and Nama restaurant are exceptional. A once-in-a-lifetime stay.',
      tip: 'Book a Park View room for the Imperial Palace vista. The Aman Spa\'s onsen floor is the best hotel spa experience in Tokyo — reserve a private session the moment you check in.',
      website: 'https://www.aman.com/hotels/aman-tokyo',
      translations: {
        ja: {
          name: 'アマン東京',
          description: '大手町タワーの上層階に位置する超高級ホテル。北の丸公園と皇居の緑を一望する無比のロケーション。広大なスパ、25mプール、日本美学を極めたインテリアが揃う。特別な滞在を求める方に。',
          tip: 'おすすめ：最高の贅沢と絶景を求めるお客様に',
          tags: ['ウルトララグジュアリー', '皇居ビュー', 'スパ', '大手町'],
        },
        zh: {
          name: '安縵東京',
          description: '位於大手町大樓高層的超奢華飯店，享有北之丸公園和皇居綠地的無與倫比景觀。設有寬闊水療中心、25米泳池及極致日本美學的室內設計，適合追求極致的旅客。',
          tip: '最適合：尋求最高奢華體驗和絕美景觀的旅客',
          tags: ['超豪華', '皇居景觀', '水療', '大手町'],
        },
      },
    },
    {
      name: 'Park Hyatt Tokyo',
      rating: 4.7,
      ratingCount: '2,340 reviews',
      price: '¥¥¥',
      priceLabel: 'From ¥65,000/night',
      tags: ['Luxury', 'Shinjuku', 'Lost in Translation', 'Pool', 'New York Grill'],
      description: 'The legendary hotel from Sofia Coppola\'s Lost in Translation — occupying floors 39–52 of the Shinjuku Park Tower. Rooms are consistently among Tokyo\'s most beautiful: dark wood, deep soaking tubs, and floor-to-ceiling views across the city to Mt. Fuji. The New York Bar on the 52nd floor remains one of Tokyo\'s great evening experiences — live jazz nightly, exceptional cocktails and that view.',
      tip: 'The 47th-floor indoor pool has an unobstructed view over West Shinjuku\'s skyline — go early morning (07:00–08:00) before other guests arrive. The Sunday brunch at New York Grill is a Tokyo institution.',
      website: 'https://www.hyatt.com/en-US/hotel/japan/park-hyatt-tokyo/tyoph',
      translations: {
        ja: {
          name: 'パーク ハイアット 東京',
          description: '映画「ロスト・イン・トランスレーション」の舞台として知られる新宿の名門ホテル。41〜52階に位置し、富士山や東京の夜景を一望できる。ニューヨーク・バーのカクテルは格別。',
          tip: 'おすすめ：映画ファンと眺望を重視する方に',
          tags: ['新宿', '富士山ビュー', 'アイコニック', 'スカイバー'],
        },
        zh: {
          name: '柏悅東京',
          description: '以電影《愛情不用翻譯》取景地聞名的新宿傳奇飯店，位於41至52樓，可一覽富士山和東京夜景。紐約酒吧的雞尾酒獨具魅力。',
          tip: '最適合：電影迷和重視視野的旅客',
          tags: ['新宿', '富士山景觀', '標誌性', '空中酒吧'],
        },
      },
    },
    {
      name: 'Dormy Inn Premium Shibuya',
      rating: 4.4,
      ratingCount: '3,120 reviews',
      price: '¥¥',
      priceLabel: 'From ¥15,000/night',
      tags: ['Business hotel', 'Shibuya', 'Onsen', 'Ramen midnight', 'Value'],
      description: 'The Dormy Inn chain is Japan\'s best-kept accommodation secret — business hotel prices with genuine onsen facilities. The Shibuya property has a rooftop natural hot spring bath, clean modern rooms, and their famous free midnight ramen service (available 21:30–23:00). Walking distance to Shibuya Crossing, Harajuku and Omotesando. Excellent value for the location and amenities.',
      tip: 'The free midnight ramen is genuinely excellent — a light shio (salt) broth. Set an alarm. The rooftop men\'s and women\'s natural onsen baths are open until 02:00.',
      website: 'https://www.hotespa.net/hotels/shibuya/',
      translations: {
        ja: {
          name: 'ドーミーイン プレミアム渋谷',
          description: '渋谷中心部に位置するコスパ抜群のビジネスホテル。大浴場完備で、渋谷スクランブル交差点へ徒歩5分。広めの客室と充実した朝食バイキングで人気。',
          tip: 'おすすめ：渋谷エリアで快適に泊まりたい方に',
          tags: ['渋谷', '大浴場', '好立地', 'コスパ良'],
        },
        zh: {
          name: '多美迎PREMIUM澀谷',
          description: '位於澀谷中心地帶，性價比極高的商務飯店，設有大浴場，步行5分鐘即達澀谷十字路口。寬敞客房和豐富早餐自助廣受好評。',
          tip: '最適合：希望在澀谷地區舒適住宿的旅客',
          tags: ['澀谷', '大浴場', '絕佳位置', '超值'],
        },
      },
    },
    {
      name: 'Shinjuku Washington Hotel',
      rating: 4.1,
      ratingCount: '4,890 reviews',
      price: '¥',
      priceLabel: 'From ¥8,500/night',
      tags: ['Budget-friendly', 'Shinjuku', 'Central location', 'Compact rooms', 'Reliable'],
      description: 'A reliable, centrally-located business hotel in the heart of Nishi-Shinjuku — one minute from the Shinjuku subway exits and within walking distance of Golden Gai, the robot restaurant area, and multiple JR lines. Rooms are compact but thoughtfully designed with modern bathrooms. The Annex building has slightly larger rooms. Consistently well-maintained and efficiently run.',
      tip: 'Book the Main Tower rooms on higher floors for Shinjuku skyline views at a budget price. The 24-hour convenience store in the lobby basement is a lifesaver for late-night snacks.',
      website: 'https://washington-hotels.jp/shinjuku/',
      translations: {
        ja: {
          name: '新宿ワシントンホテル',
          description: '新宿駅南口から徒歩5分の利便性が魅力。機能的な客室と豊富な飲食施設、都内主要観光地へのアクセスの良さで、ビジネス・観光どちらにも適したホテル。',
          tip: 'おすすめ：新宿を拠点に東京観光をしたい方に',
          tags: ['新宿', '好立地', '実用的', '駅近'],
        },
        zh: {
          name: '新宿華盛頓酒店',
          description: '距新宿車站南口步行5分鐘，交通便利，提供功能性客房和豐富餐飲設施，前往東京各主要觀光景點十分方便，適合商務和觀光旅客。',
          tip: '最適合：希望以新宿為據點遊覽東京的旅客',
          tags: ['新宿', '絕佳位置', '實用', '近車站'],
        },
      },
    },
  ],
  restaurants: [
    {
      name: 'Sushi Saito',
      rating: 5.0,
      ratingCount: '340 reviews',
      price: '¥¥¥',
      tags: ['Omakase', 'Michelin 3-star', 'Roppongi', 'Legendary', 'Book months ahead'],
      description: 'Chef Takashi Saito\'s 10-seat counter is widely considered the finest sushi restaurant in the world — three Michelin stars and a reservation list that extends 6–8 months ahead for non-regulars. The omakase menu (¥40,000–60,000 lunch) features the day\'s finest Tsukiji sourcing: tuna from Oma, sea urchin from Hokkaido, freshwater eel from the Kanto rivers. The rice seasoning and nigiri-forming technique are studied by sushi chefs globally.',
      mustTry: 'The full omakase — 20+ pieces of nigiri prepared and served one at a time, beginning with lean tuna (akami) and concluding with tamago',
      hours: 'Tue–Sat 12:00 and 18:00 seatings (reservation essential months in advance)',
      bookAhead: true,
      translations: {
        ja: {
          name: '鮨 さいとう',
          description: '世界で最も予約が困難とされる鮨店の一つ。ミシュラン3つ星を長年維持する齋藤孝司氏が握るおまかせは、東京で最上のシャリとネタの組み合わせを体験できる。コネクションなしでの予約はほぼ不可能。',
          mustTry: '全10〜15貫のおまかせコース（季節のネタで変わる）',
          hours: '要予約。完全紹介制のため直接予約不可',
          tags: ['鮨', '要予約', 'ミシュラン3つ星', '六本木'],
        },
        zh: {
          name: '鮨 齋藤',
          description: '世界上最難訂位的壽司餐廳之一，由長年維持米其林三星的齋藤孝司師傅主理，提供東京最頂級的醋飯與魚料組合體驗。沒有關係介紹幾乎無法訂位。',
          mustTry: '全10〜15道的無菜單套餐（隨季節魚料變化）',
          hours: '需預訂，完全熟客制，無法直接訂位',
          tags: ['壽司', '需預訂', '米其林三星', '六本木'],
        },
      },
    },
    {
      name: 'Ichiran Shinjuku',
      rating: 4.3,
      ratingCount: '8,200 reviews',
      price: '¥',
      tags: ['Tonkotsu ramen', 'Solo dining', 'Shinjuku', 'Open late', 'No Japanese needed'],
      description: 'Ichiran invented the solo ramen booth — a private bamboo-screened counter where you customise your Hakata-style tonkotsu ramen (broth richness, garlic level, spice, noodle firmness, topping preferences) via a printed form. The broth is pork-bone based, milky and deeply savoury. Staff communication is minimal; your customised bowl arrives through a bamboo blind. Open 24 hours at this location.',
      mustTry: 'Tonkotsu ramen, rich broth setting, extra firm noodles, half-slice chashu pork — add kaedama (extra noodles) for ¥200 when your bowl is nearly finished',
      hours: 'Open 24 hours',
      translations: {
        ja: {
          name: '一蘭 新宿店',
          description: '一人用の仕切りブースで食べる博多豚骨ラーメンの専門店。注文は紙の記入式で、麺のかたさ・スープの濃さ・ネギの量などを自分好みにカスタマイズできる。日本語が読めなくても安心の英語対応メニュー。',
          mustTry: '天然とんこつラーメン（辛さ・濃度・麺のかたさを指定）',
          hours: '24時間営業',
          tags: ['博多ラーメン', '一人用ブース', '24時間', '新宿'],
        },
        zh: {
          name: '一蘭 新宿店',
          description: '在獨立隔間中享用的博多豚骨拉麵專門店，以紙張點餐方式可自訂麵條硬度、湯頭濃度、蔥量等，完全按個人喜好調整。提供英文菜單，不懂日語也無需擔心。',
          mustTry: '天然豚骨拉麵（可指定辣度、濃度、麵條硬度）',
          hours: '24小時營業',
          tags: ['博多拉麵', '獨立隔間', '24小時', '新宿'],
        },
      },
    },
    {
      name: 'Gonpachi Nishi-Azabu',
      rating: 4.2,
      ratingCount: '5,670 reviews',
      price: '¥¥',
      tags: ['Izakaya', 'Kill Bill', 'Nishi-Azabu', 'Atmospheric', 'Good for groups'],
      description: 'The four-storey Edo-period warehouse aesthetic that Quentin Tarantino visited for inspiration before designing the House of Blue Leaves in Kill Bill Vol. 1. Despite its tourist fame, the food and atmosphere remain genuinely excellent: robata-grilled skewers (yakitori, vegetables, tofu), hand-rolled soba, and exceptional sake selection served by knowledgeable staff. Arrive at 18:00 to secure a balcony table.',
      mustTry: 'Assorted yakitori platter (negima, tsukune, liver), the house-made cold soba, and a carafe of Dassai junmai daiginjo sake',
      hours: 'Mon–Fri 17:00–03:00, Sat–Sun 11:30–03:00',
      translations: {
        ja: {
          name: '権八 西麻布',
          description: '映画「キル・ビル」の戦闘シーンの参考になったとされる、江戸の蔵をイメージした居酒屋。焼き鳥、串焼き、そばなどの和食と豊富な日本酒・焼酎が揃う。外国人観光客にも大人気の東京名物スポット。',
          mustTry: '備長炭焼き鳥の盛り合わせと地酒',
          hours: '毎日 11:30〜24:00（LO 23:00）',
          tags: ['居酒屋', 'キル・ビル', '西麻布', '焼き鳥'],
        },
        zh: {
          name: '権八 西麻布',
          description: '據說是電影《追殺比爾》格鬥場景靈感來源，以江戶藏屋造型為設計概念的居酒屋。提供燒鳥、串燒、蕎麥麵等和食及豐富日本酒、燒酎，深受外國遊客喜愛的東京名所。',
          mustTry: '備長炭燒鳥拼盤和當地清酒',
          hours: '每日 11:30〜24:00（最後點餐23:00）',
          tags: ['居酒屋', '追殺比爾', '西麻布', '燒鳥'],
        },
      },
    },
    {
      name: 'Tsuta Ramen',
      rating: 4.4,
      ratingCount: '2,890 reviews',
      price: '¥¥',
      tags: ['Michelin star', 'Shoyu ramen', 'Shinjuku', 'Queue expected', 'World first'],
      description: 'The world\'s first ramen shop to receive a Michelin star (awarded 2016). Chef Yuki Onishi\'s shoyu (soy sauce) tare ramen uses three types of soy sauce blended with clam dashi and chicken oil, producing a broth of extraordinary clarity and complexity. The black truffle soba is the signature. Queues typically 30–45 minutes; arrive 15 minutes before opening.',
      mustTry: 'Shoyu soba with black truffle sauce (黒トリュフそば) — the bowl that earned Michelin recognition',
      hours: 'Wed–Mon 11:00–21:00 (numbers distributed from 09:00)',
      bookAhead: true,
      translations: {
        ja: {
          name: '蔦',
          description: '世界初のミシュラン一つ星を獲得したラーメン店。国産醤油・鶏・蛤を丁寧に引いた澄んだ醤油スープは、まるで日本料理の一皿のような上品さ。トリュフオイルを使ったメニューも話題。',
          mustTry: '醤油そば（トリュフオイル添え）',
          hours: '月〜土 11:00〜21:00、日曜休（開店前に整理券配布）',
          tags: ['ミシュラン1つ星', '醤油ラーメン', '新宿', '整理券'],
        },
        zh: {
          name: '蔦',
          description: '全球首家獲得米其林一星的拉麵店，以國產醬油、雞肉和蛤蜊細心熬製的清澈醬油湯底，宛如日本料理的一道精緻料理。加入松露油的菜單同樣備受矚目。',
          mustTry: '醬油拉麵（附松露油）',
          hours: '週一至週六 11:00〜21:00，週日休息（開店前分發整理券）',
          tags: ['米其林一星', '醬油拉麵', '新宿', '整理券'],
        },
      },
    },
    {
      name: 'Uobei Shibuya',
      rating: 4.0,
      ratingCount: '6,430 reviews',
      price: '¥',
      tags: ['Conveyor belt sushi', 'Shibuya', 'Tech experience', 'Fun', 'Budget'],
      description: 'Tokyo\'s most technologically entertaining sushi restaurant — order via touchscreen tablet and your selected plates are delivered at high speed via a dedicated miniature track directly to your seat, guided by robotic arm. Each plate is ¥121–242 (approximately ¥1,500–2,500 per person for a full meal). The fish quality is good for the price, the atmosphere is buzzy and youthful. Perfect for an energetic weeknight dinner.',
      mustTry: 'Premium tuna selection (maguro, chutoro, otoro), salmon roe (ikura), and the live scallop if available — order in rounds to pace the experience',
      hours: 'Daily 11:00–23:00',
      translations: {
        ja: {
          name: '魚べい 渋谷',
          description: '新幹線スタイルの高速レーンで寿司が届く、革新的な回転寿司チェーン。タッチパネルで注文すると新幹線形の台車で直接届く。家族みんなで楽しめる、リーズナブルで美味しい東京のお寿司体験。',
          mustTry: '大トロサーモン、えび天握り、たまご',
          hours: '毎日 11:00〜23:00',
          tags: ['回転寿司', '新幹線レーン', '渋谷', 'ファミリー向け'],
        },
        zh: {
          name: '魚べい 澀谷店',
          description: '以新幹線風格高速軌道送上壽司的創新迴轉壽司連鎖店，透過觸控面板點餐後，壽司會由新幹線造型小車直接送達。全家都能樂在其中，東京實惠美味的壽司體驗。',
          mustTry: '大鮪魚鮭魚、炸蝦握壽司、玉子燒',
          hours: '每日 11:00〜23:00',
          tags: ['迴轉壽司', '新幹線軌道', '澀谷', '親子友善'],
        },
      },
    },
  ],
};
