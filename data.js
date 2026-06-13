// ============================================================
// DATA.JS — File dữ liệu trung tâm
// Để thêm truyện mới: copy một object trong mảng STORIES
// và điền thông tin của bạn vào.
// ============================================================

const STORIES = [
  {
    id: "ma-lang-hoang-hon",
    title: "Ma Làng Hoàng Hôn",
    author: "Nguyễn Văn An",
    cover: "assets/covers/cover1.svg",
    genre: ["Kinh dị", "Huyền bí"],
    status: "Đang ra", // "Đang ra" | "Hoàn thành"
    views: 12400,
    summary:
      "Trong một ngôi làng nhỏ bị lãng quên giữa rừng già, mỗi khi hoàng hôn buông xuống, người ta lại nghe tiếng khóc vọng từ ngôi miếu cổ. Khánh — một nhà báo trẻ — về đây điều tra và dần nhận ra bản thân mình có liên hệ kỳ lạ với những cái chết bí ẩn đã xảy ra hàng thập kỷ trước.",
    updatedAt: "2025-06-10",
    featured: true,
    chapters: [
      {
        id: 1,
        title: "Chương 1: Tiếng Gọi Từ Rừng",
        updatedAt: "2025-05-01",
        content: `<p>Chuyến xe khách cuối ngày thả Khánh xuống ở đầu con đường đất đỏ, nơi cột mốc gỗ mục ghi hai chữ <em>"Làng Yên"</em> bằng sơn đã bong hết màu.</p>

<p>Anh đứng nhìn theo chiếc xe cho đến khi ánh đèn hậu khuất sau vạt rừng tràm. Hoàng hôn đang tàn. Bầu trời phía Tây đỏ như máu pha cam — thứ màu trời mà người già ở quê anh hay gọi là "trời đang khóc".</p>

<p>— <em>Làng Yên.</em> Khánh thở dài, kéo túi lên vai. — <em>Yên mà có yên đâu...</em></p>

<p>Ba tuần trước, tòa soạn nhận được một phong bì không tên gửi đến. Bên trong là tập ảnh chụp tay — những ngôi mộ không bia, những vết cháy trên tường miếu cổ — và một tờ giấy duy nhất viết bằng mực đen: <strong>"Hãy đến Làng Yên trước khi không còn ai để kể."</strong></p>

<p>Tổng biên tập muốn giao cho phóng viên khác. Nhưng Khánh nhận ra nét chữ. Đó là chữ của mẹ anh — người đã mất tích tại ngôi làng này mười bảy năm về trước.</p>

<p>Anh bước vào con đường đất. Rừng tràm hai bên đứng im như những gã gác cổng không mắt. Gió không thổi. Côn trùng không kêu. Và đâu đó — rất xa, hoặc rất gần, anh không chắc — có tiếng khóc của một người đàn bà vọng ra từ hướng miếu cổ.</p>

<p>Khánh dừng bước. Tim anh đập chậm lại một nhịp.</p>

<p>Rồi tiếng khóc tắt. Như chưa từng có.</p>

<p>Anh nhìn đồng hồ: 6 giờ 6 phút chiều. Đúng giờ hoàng hôn.</p>

<p>Và Khánh chợt nhớ ra — người dẫn đường qua điện thoại đã dặn anh một câu trước khi cúp máy: <em>"Anh ơi, dù nghe thấy gì, đừng bao giờ gọi tên người chết lúc hoàng hôn."</em></p>`
      },
      {
        id: 2,
        title: "Chương 2: Ngôi Nhà Cuối Làng",
        updatedAt: "2025-05-08",
        content: `<p>Ngôi nhà của ông Tư Mãn nằm ở cuối làng, sát bờ con mương đã cạn. Tường vôi loang lổ. Mái ngói phủ rêu. Nhưng có ánh đèn vàng hắt ra từ cửa sổ — dấu hiệu duy nhất của sự sống trong cái làng tối om này.</p>

<p>Ông Tư ra mở cửa khi Khánh vừa đặt tay lên gõ. Như thể đã biết trước có người đến.</p>

<p>— Tôi cứ ngỡ cậu sẽ quay về khi nghe tiếng khóc. — Ông nói, không thèm chào hỏi. Giọng khàn như đá mài vào nhau.</p>

<p>— Ông biết tôi là ai? — Khánh hỏi.</p>

<p>Ông Tư nhìn anh một lúc lâu, ánh mắt như đang đọc một thứ gì đó ở sau mặt Khánh.</p>

<p>— Tôi biết mẹ cậu. — Ông nói. — Và tôi đã đợi cậu mười bảy năm nay.</p>

<p>Khánh bước vào nhà với cảm giác ngưỡng cửa không phải là ranh giới giữa trong và ngoài — mà là ranh giới giữa hiện tại và quá khứ.</p>

<p>Trên bàn thờ, giữa mấy cây nhang đang tàn, có một tấm ảnh đen trắng. Một người phụ nữ trẻ, mặc áo dài trắng, đứng trước ngôi miếu. Cười. Đôi mắt nhìn thẳng vào ống kính như nhìn thẳng vào mắt Khánh.</p>

<p>Đó là mẹ anh. Chụp vào cái ngày bà mất tích.</p>

<p>— Ngồi xuống đi cậu. — Ông Tư rót trà. — Câu chuyện này dài lắm. Và cậu cần biết hết trước khi trời sáng, vì ban ngày ở đây... — ông dừng lại, nhìn ra cửa sổ — <em>không phải lúc để nói chuyện thật.</em></p>`
      },
      {
        id: 3,
        title: "Chương 3: Lời Nguyền Của Miếu Cổ",
        updatedAt: "2025-05-15",
        content: `<p>Ông Tư Mãn kể chuyện theo cách của người già ở đây — không theo trình tự thời gian, mà theo mức độ nặng của sự thật. Nhẹ trước. Nặng sau. Nặng nhất thì để đến khi trà đã nguội hết.</p>

<p>Ngôi miếu cổ ở đầu làng đã có từ trước khi làng Yên được lập ra. Không ai biết ai xây. Người ta chỉ biết rằng miếu thờ một người đàn bà chết oan — bị chồng giết vì nghi ngoại tình — vào đúng buổi hoàng hôn, đúng ngày Rằm tháng Bảy.</p>

<p>— Bà ấy không đi. — Ông Tư nói. — Linh hồn người chết oan mà không siêu thoát thì... mạnh lắm. Và bà ấy muốn người ta biết mình bị oan.</p>

<p>Mỗi năm, vào Rằm tháng Bảy, miếu lại "đòi" một người. Không phải để hại — ông Tư nhấn mạnh điều này — mà để <em>kể chuyện</em>. Người bị chọn sẽ nghe thấy tiếng bà gọi lúc hoàng hôn và bước vào miếu. Hôm sau họ ra về. Nhưng họ không còn nhớ gì về đêm đó. Và một tháng sau, họ mất tích.</p>

<p>— Mẹ tôi... — Khánh nghẹn giọng.</p>

<p>— Bà ấy bị chọn. — Ông Tư gật đầu. — Nhưng mẹ cậu khác. Bà ấy không ra khỏi miếu vào sáng hôm sau. Bà ở lại. Tự nguyện. Vì bà hiểu bà ấy cần gì.</p>

<p>Khánh nhìn chằm chằm vào ngọn nến đang chực tắt trên bàn.</p>

<p>— Bà ấy cần gì?</p>

<p>Ông Tư đặt chén trà xuống. Tiếng sứ chạm gỗ nghe rõ trong đêm vắng.</p>

<p>— Cần người kể lại câu chuyện của mình cho đúng. — Ông nói. — Và mẹ cậu... đã ở lại để học cách làm điều đó. Bà đang ở trong miếu. Vẫn còn đó. Đợi cậu.</p>`
      }
    ]
  },
  {
    id: "tinh-yeu-duoi-mua",
    title: "Tình Yêu Dưới Mưa",
    author: "Lê Thị Hoa",
    cover: "assets/covers/cover2.svg",
    genre: ["Ngôn tình", "Lãng mạn"],
    status: "Hoàn thành",
    views: 28700,
    summary:
      "Minh — kiến trúc sư lạnh lùng, không tin vào tình yêu — tình cờ gặp Linh trong một buổi chiều mưa tại quán cà phê nhỏ. Linh mang theo ký ức đau và nụ cười che giấu nước mắt. Hai người đến với nhau bằng những hiểu lầm, rồi ở lại bằng sự thật.",
    updatedAt: "2025-06-01",
    featured: true,
    chapters: [
      {
        id: 1,
        title: "Chương 1: Người Lạ Trong Mưa",
        updatedAt: "2025-04-10",
        content: `<p>Linh ghét mưa.</p>

<p>Không phải vì mưa lạnh, hay vì mưa làm ướt tóc cô. Mà vì mỗi lần mưa, cô lại nhớ đến cái ngày anh ấy bỏ đi — cũng là một buổi chiều mưa, anh kéo vali ra khỏi căn hộ mà không quay đầu lại.</p>

<p>Cô ngồi trong góc quán cà phê nhỏ trên phố Nguyễn Huệ, nhìn những hạt mưa gõ lên kính cửa, và tự hỏi mình còn ngồi đây làm gì. Đã ba mươi phút từ khi bạn nhắn "mình bận, đến muộn tí" — mà "tí" đó chắc là vô hạn.</p>

<p>— Xin lỗi, đây có ai ngồi không?</p>

<p>Cô ngẩng đầu lên. Một người đàn ông đứng cạnh bàn, tóc ướt, áo vest xám đậm còn lấm tấm nước. Anh cầm trên tay một chiếc máy tính bảng và nhìn cô bằng ánh mắt không có chút biểu cảm nào — loại nhìn của người hỏi vì lịch sự, chứ không thực sự quan tâm đến câu trả lời.</p>

<p>Linh nhìn quanh. Quán kín chỗ. Mưa ngoài kia nặng hơn.</p>

<p>— Không ai. — Cô nói. — Anh cứ ngồi.</p>

<p>Người đàn ông kéo ghế ra, ngồi xuống, mở máy tính bảng và lập tức nhìn vào màn hình như Linh không tồn tại.</p>

<p>Linh nhìn anh một giây. Rồi quay lại nhìn mưa. Rồi lại nhìn anh.</p>

<p>Góc trái hàm anh có một vết sẹo nhỏ, trắng, dài khoảng nửa đốt ngón tay. Trông như dấu vết của một chuyện cũ mà anh không muốn kể.</p>

<p><em>Thôi kệ.</em> Cô quay đi. <em>Người lạ mà.</em></p>

<p>Nhưng mười lăm phút sau, khi anh gọi cà phê đen không đường và nhân viên hỏi "anh uống ít đá hay nhiều đá", anh trả lời "không đá" bằng cái giọng trầm và chắc đến mức Linh — không hiểu sao — lại thấy lòng bình tĩnh hơn một chút.</p>

<p>Mưa vẫn rơi. Nhưng lần này Linh không thấy ghét nó nữa.</p>`
      },
      {
        id: 2,
        title: "Chương 2: Kiến Trúc Của Trái Tim",
        updatedAt: "2025-04-17",
        content: `<p>Minh không có thói quen ngồi quán cà phê. Anh uống cà phê ở nhà, một mình, trước bản vẽ, lúc sáu giờ sáng khi Sài Gòn chưa kịp ồn ào.</p>

<p>Nhưng hôm nay máy tính xách tay chết pin, sạc để quên ở văn phòng, và cơn mưa đổ xuống đúng lúc anh đang đứng giữa vỉa hè với một deadline nộp bản vẽ trong hai tiếng. Quán cà phê gần nhất là lựa chọn duy nhất.</p>

<p>Anh không chú ý đến cô gái ngồi bàn đối diện — hay đúng hơn là anh đã chú ý và chủ động chọn không chú ý. Anh có việc để làm.</p>

<p>Nhưng rồi cô ấy thở dài.</p>

<p>Không phải thở dài to. Chỉ là một tiếng thở nhẹ, kiểu thở của người đã ngồi đợi quá lâu và đang cố thuyết phục bản thân rằng mình ổn. Minh nhận ra vì anh từng nghe tiếng thở đó — từ chính mình, trong những năm trước.</p>

<p>Anh không nhìn lên. Nhưng anh bắt đầu không còn tập trung vào bản vẽ nữa.</p>

<p>Hai mươi phút sau, điện thoại cô rung. Cô nhìn màn hình, rồi nhắn tin gì đó, rồi đặt điện thoại xuống và nhìn ra mưa với khuôn mặt của người vừa quyết định điều gì đó.</p>

<p>— Xin lỗi. — Giọng cô khiến anh ngẩng đầu. Cô đang nhìn anh, nhưng không phải nhìn anh — nhìn theo kiểu tìm điểm tựa cho mắt khi không muốn nhìn vào khoảng trống. — Anh có thể trông giúp đồ cho tôi không? Tôi cần ra ngoài một chút.</p>

<p>Minh nhìn cái túi vải nhỏ của cô, rồi nhìn cô.</p>

<p>— Được. — Anh nói.</p>

<p>Cô mỉm cười — loại cười ngắn, lịch sự, không chạm đến mắt — rồi đứng dậy bước ra cửa, đứng dưới mái hiên, mở điện thoại và bắt đầu nói chuyện với ai đó.</p>

<p>Minh nhìn xuống bản vẽ. Nhìn lên. Nhìn xuống.</p>

<p>Ngoài kia, cô đang cười — lần này thật hơn — trong khi mưa táp vào mái hiên phía sau cô.</p>

<p><em>Kỳ lạ.</em> Anh nghĩ. <em>Người ta cười được cả khi đang buồn.</em></p>`
      }
    ]
  },
  {
    id: "nguoi-ve-tu-bien-gioi",
    title: "Người Về Từ Biên Giới",
    author: "Trần Minh Khôi",
    cover: "assets/covers/cover3.svg",
    genre: ["Hành động", "Huyền huyễn"],
    status: "Đang ra",
    views: 9300,
    summary:
      "Sau mười năm mất tích ở vùng biên giới bí ẩn giữa hai thế giới, Tuấn trở về với sức mạnh không giải thích được và ký ức không trọn vẹn. Anh phải tìm ra điều gì đã xảy ra với mình — trước khi thứ đang săn đuổi anh từ bên kia biên giới bắt kịp.",
    updatedAt: "2025-06-08",
    featured: false,
    chapters: [
      {
        id: 1,
        title: "Chương 1: Trở Về",
        updatedAt: "2025-05-20",
        content: `<p>Người ta tìm thấy Tuấn ở bờ sông Đà vào lúc bốn giờ sáng, ngồi trên đá, mặc bộ quân phục đã rách và cũ đến mức không còn nhận ra phiên hiệu.</p>

<p>Đồn biên phòng gần nhất mất hai tiếng để xác định danh tính anh. Hồ sơ của Binh nhất Nguyễn Văn Tuấn — tiểu đoàn 16, mất tích năm 2015 trong một vụ tuần tra dọc biên giới — đã được chuyển sang mục "tử sĩ chưa tìm được hài cốt" từ ba năm trước.</p>

<p>Nhưng Tuấn không chết. Anh ngồi đó, uống nước từ chiếc ca nhôm mà người lính trẻ đưa cho, và trả lời những câu hỏi đơn giản bằng giọng bình thản đến kỳ lạ.</p>

<p>— Anh đi đâu mười năm nay?</p>

<p>— Tôi không biết. — Anh nói thật. — Tôi chỉ nhớ bước vào rừng. Rồi tôi đang ngồi ở đây.</p>

<p>Điều khiến người ta lo ngại không phải là câu trả lời đó. Mà là bàn tay anh — khi anh đặt chiếc ca xuống đất, hòn đá bên dưới nứt ra thành ba mảnh. Anh không dùng lực. Anh chỉ đặt xuống.</p>

<p>Người lính trẻ nhìn hòn đá. Nhìn Tuấn. Không nói gì.</p>

<p>Tuấn cũng nhìn hòn đá. Đây không phải lần đầu điều này xảy ra — nhưng anh không biết khi nào thì bắt đầu, và anh cũng không biết làm sao để dừng lại.</p>

<p>Bên kia sông, trong màn sương sớm còn dày, có gì đó di chuyển. Không phải người. Không phải thú. Chỉ là một bóng đen không có hình dạng cố định, đứng ở mép sông và nhìn về phía anh.</p>

<p>Tuấn nhìn lại nó.</p>

<p>Rồi sương tan. Bóng đen biến mất.</p>

<p><em>Chưa phải lúc.</em> Anh nghĩ — hay có thứ gì đó trong đầu anh nghĩ điều đó thay anh.</p>`
      }
    ]
  }
];

// ============================================================
// Helper functions — dùng trong các trang JS khác
// ============================================================

function getStoryById(id) {
  return STORIES.find((s) => s.id === id) || null;
}

function getChapterById(storyId, chapterId) {
  const story = getStoryById(storyId);
  if (!story) return null;
  return story.chapters.find((c) => c.id === parseInt(chapterId)) || null;
}

function getAllGenres() {
  const genres = new Set();
  STORIES.forEach((s) => s.genre.forEach((g) => genres.add(g)));
  return Array.from(genres).sort();
}
