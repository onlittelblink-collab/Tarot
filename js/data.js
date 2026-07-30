// Du lieu 78 la bai Oni Ethereal Tarot
// Nguon: tarot_cards_jung.json do nguoi dung cung cap - noi dung nghia
// (bao gom meaning_jung) duoc giu nguyen, chi chuan hoa ky tu gach ngang.
const TAROT_CARDS = [
  {
    "id": "ar00",
    "name_vi": "Kẻ Ngốc",
    "name_en": "The Fool",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 0,
    "element": "Khí",
    "astrology": "Sao Thiên Vương",
    "image": "assets/images/ar00.jpg",
    "keywords_upright": [
      "khởi đầu mới",
      "tự do",
      "phiêu lưu",
      "ngây thơ",
      "niềm tin"
    ],
    "keywords_reversed": [
      "liều lĩnh",
      "thiếu suy nghĩ",
      "sợ hãi thay đổi",
      "bốc đồng"
    ],
    "meaning_upright": "Một khởi đầu tràn đầy hứng khởi đang mở ra, mời gọi bạn bước đi với niềm tin dù chưa biết trước điều gì ở phía trước. Đây là lúc để dấn thân, thử điều mới và tin vào trực giác của mình.",
    "meaning_reversed": "Sự liều lĩnh hoặc thiếu chuẩn bị có thể khiến bạn gặp rắc rối. Cũng có thể bạn đang sợ hãi trước một bước ngoặt và cố tình trì hoãn quyết định.",
    "love": "Một mối quan hệ mới mẻ, tự phát hoặc mong muốn được tự do trải nghiệm.",
    "career": "Cơ hội khởi nghiệp, đổi hướng sự nghiệp hoặc thử thách chưa từng làm.",
    "advice": "Đừng để nỗi sợ ngăn bạn bước đi, nhưng hãy chuẩn bị tối thiểu trước khi nhảy.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Lá bài thể hiện nguyên mẫu Đứa Trẻ Thần Thánh (Divine Child) - trạng thái tinh thần nguyên sơ, chưa bị quy định bởi khuôn mẫu xã hội, đứng ở điểm khởi đầu của tiến trình cá nhân hóa (individuation). Đó là niềm tin bản năng vào cuộc sống, trước khi cái Tôi (ego) được định hình rõ ràng.)"
  },
  {
    "id": "ar01",
    "name_vi": "Pháp Sư",
    "name_en": "The Magician",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 1,
    "element": "Khí",
    "astrology": "Sao Thủy",
    "image": "assets/images/ar01.jpg",
    "keywords_upright": [
      "ý chí",
      "kỹ năng",
      "sáng tạo",
      "hành động",
      "tự tin"
    ],
    "keywords_reversed": [
      "thao túng",
      "tiềm năng lãng phí",
      "lừa dối",
      "thiếu tập trung"
    ],
    "meaning_upright": "Bạn có đầy đủ công cụ, kỹ năng và nguồn lực để biến ý tưởng thành hiện thực. Đây là thời điểm để hành động với sự tự tin và tập trung ý chí vào mục tiêu.",
    "meaning_reversed": "Tiềm năng đang bị lãng phí hoặc sử dụng sai mục đích. Có thể có sự lừa dối, thao túng hoặc bạn đang thiếu tập trung để hoàn thành việc gì đó.",
    "love": "Sức hút mạnh mẽ, chủ động theo đuổi hoặc cần thành thật hơn trong giao tiếp.",
    "career": "Thời điểm tốt để khởi động dự án, thể hiện năng lực và chủ động dẫn dắt.",
    "advice": "Tập trung ý chí vào một mục tiêu rõ ràng thay vì dàn trải nguồn lực.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Biểu trưng cho khoảnh khắc cái Tôi ý thức (ego) bắt đầu hình thành và khẳng định quyền năng của mình: khả năng chuyển hóa nội dung vô thức thành hành động, ngôn từ và hình hài cụ thể trong thế giới hữu hình - bước khởi đầu của ý chí trên hành trình cá nhân hóa.)"
  },
  {
    "id": "ar02",
    "name_vi": "Nữ Tư Tế",
    "name_en": "The High Priestess",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 2,
    "element": "Nước",
    "astrology": "Mặt Trăng",
    "image": "assets/images/ar02.jpg",
    "keywords_upright": [
      "trực giác",
      "bí ẩn",
      "tiềm thức",
      "tĩnh lặng",
      "tri thức nội tâm"
    ],
    "keywords_reversed": [
      "mất kết nối trực giác",
      "bí mật bị che giấu",
      "hời hợt"
    ],
    "meaning_upright": "Câu trả lời bạn cần nằm ở trực giác và sự tĩnh lặng bên trong hơn là hành động bên ngoài. Hãy lắng nghe tiềm thức và những gì chưa được nói ra.",
    "meaning_reversed": "Bạn đang mất kết nối với trực giác của chính mình, hoặc có những bí mật đang bị che giấu mà bạn cần cẩn trọng.",
    "love": "Cảm xúc sâu kín chưa được bày tỏ, cần thời gian tìm hiểu kỹ hơn.",
    "career": "Tin vào linh cảm khi ra quyết định, tránh vội vàng công khai kế hoạch.",
    "advice": "Dành thời gian yên tĩnh để lắng nghe bản thân trước khi hành động.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Đại diện cho nguyên mẫu Anima ở dạng thuần khiết nhất - cánh cổng dẫn vào vô thức tập thể (collective unconscious), nơi lưu giữ tri thức trực giác chưa được lý trí hóa. Đây là tiếng nói nội tâm mà cái Tôi cần học cách lắng nghe thay vì kiểm soát.)"
  },
  {
    "id": "ar03",
    "name_vi": "Nữ Hoàng",
    "name_en": "The Empress",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 3,
    "element": "Đất",
    "astrology": "Sao Kim",
    "image": "assets/images/ar03.jpg",
    "keywords_upright": [
      "sung túc",
      "nuôi dưỡng",
      "sáng tạo",
      "thiên nhiên",
      "dồi dào"
    ],
    "keywords_reversed": [
      "bế tắc sáng tạo",
      "phụ thuộc",
      "mất cân bằng",
      "cạn kiệt"
    ],
    "meaning_upright": "Sự sung túc, sáng tạo và nuôi dưỡng đang nở rộ. Đây là năng lượng của mẹ thiên nhiên - chăm sóc bản thân và người khác sẽ mang lại kết quả dồi dào.",
    "meaning_reversed": "Bạn có thể đang bế tắc sáng tạo, kiệt sức vì chăm lo cho người khác quá nhiều, hoặc phụ thuộc thái quá vào ai đó.",
    "love": "Tình cảm ấm áp, khả năng mang thai/sinh sản theo nghĩa đen hoặc biểu tượng, sự chăm sóc.",
    "career": "Dự án sáng tạo phát triển tốt, môi trường làm việc nuôi dưỡng tài năng.",
    "advice": "Chăm sóc bản thân trước khi chăm sóc người khác để tránh cạn kiệt.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Hiện thân của nguyên mẫu Đại Mẫu (Great Mother archetype) - khía cạnh nuôi dưỡng, sinh sôi của Anima, gắn với thiên nhiên, sáng tạo và lòng trắc ẩn vô điều kiện dành cho cả bản thân lẫn người khác.)"
  },
  {
    "id": "ar04",
    "name_vi": "Hoàng Đế",
    "name_en": "The Emperor",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 4,
    "element": "Lửa",
    "astrology": "Bạch Dương",
    "image": "assets/images/ar04.jpg",
    "keywords_upright": [
      "quyền lực",
      "cấu trúc",
      "kỷ luật",
      "ổn định",
      "uy quyền"
    ],
    "keywords_reversed": [
      "độc đoán",
      "cứng nhắc",
      "mất kiểm soát",
      "lạm quyền"
    ],
    "meaning_upright": "Trật tự, kỷ luật và cấu trúc rõ ràng sẽ giúp bạn đạt được sự ổn định lâu dài. Đây là năng lượng của người lãnh đạo biết xây dựng nền tảng vững chắc.",
    "meaning_reversed": "Sự độc đoán, cứng nhắc hoặc lạm dụng quyền lực đang gây ra vấn đề. Cũng có thể bạn đang cảm thấy mất kiểm soát với tình huống của mình.",
    "love": "Mối quan hệ cần ranh giới rõ ràng, hoặc một đối phương có xu hướng kiểm soát.",
    "career": "Vai trò quản lý, xây dựng quy trình, khẳng định vị thế lãnh đạo.",
    "advice": "Lãnh đạo bằng sự vững vàng chứ không phải bằng sự áp đặt.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Thể hiện nguyên mẫu Người Cha (Father archetype), phần Animus mang tính cấu trúc và Logos - năng lực tạo lập trật tự, ranh giới và quy tắc để cái Tôi có thể phát triển vững chắc trong thế giới.)"
  },
  {
    "id": "ar05",
    "name_vi": "Giáo Hoàng",
    "name_en": "The Hierophant",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 5,
    "element": "Đất",
    "astrology": "Kim Ngưu",
    "image": "assets/images/ar05.jpg",
    "keywords_upright": [
      "truyền thống",
      "giáo lý",
      "quy tắc",
      "cố vấn",
      "niềm tin chung"
    ],
    "keywords_reversed": [
      "nổi loạn",
      "phá vỡ quy tắc",
      "giáo điều",
      "tự do cá nhân"
    ],
    "meaning_upright": "Truyền thống, giáo dục chính quy hoặc lời khuyên từ người có kinh nghiệm sẽ dẫn đường cho bạn. Đây là lúc tuân theo những giá trị đã được kiểm chứng.",
    "meaning_reversed": "Bạn đang muốn phá vỡ quy tắc cũ, nổi loạn chống lại giáo điều, hoặc tìm con đường riêng thay vì đi theo số đông.",
    "love": "Mối quan hệ theo khuôn mẫu truyền thống, hoặc cam kết chính thức (hôn nhân).",
    "career": "Đào tạo, chứng chỉ, làm việc trong hệ thống có cấp bậc rõ ràng.",
    "advice": "Tôn trọng kinh nghiệm đi trước, nhưng đừng ngại đặt câu hỏi.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Đại diện cho Persona mang tính tập thể - lớp mặt nạ xã hội giúp cá nhân hòa nhập với truyền thống, giáo lý và chuẩn mực chung; là cầu nối giữa trải nghiệm cá nhân và những giá trị đã được cộng đồng kiểm chứng qua thời gian.)"
  },
  {
    "id": "ar06",
    "name_vi": "Tình Nhân",
    "name_en": "The Lovers",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 6,
    "element": "Khí",
    "astrology": "Song Tử",
    "image": "assets/images/ar06.jpg",
    "keywords_upright": [
      "tình yêu",
      "lựa chọn",
      "kết nối",
      "hài hòa",
      "giá trị chung"
    ],
    "keywords_reversed": [
      "mất cân bằng",
      "lựa chọn sai lầm",
      "bất hòa",
      "thiếu chân thành"
    ],
    "meaning_upright": "Một sự kết nối sâu sắc dựa trên giá trị chung đang xuất hiện, hoặc bạn đang đứng trước một lựa chọn quan trọng cần cân nhắc kỹ bằng cả trái tim và lý trí.",
    "meaning_reversed": "Mất cân bằng trong mối quan hệ, một lựa chọn sai lầm đã hoặc sắp xảy ra, hoặc sự thiếu chân thành đang gây rạn nứt.",
    "love": "Sự hòa hợp sâu sắc, hoặc một quyết định quan trọng về mối quan hệ.",
    "career": "Hợp tác dựa trên giá trị chung, hoặc lựa chọn giữa hai con đường sự nghiệp.",
    "advice": "Chọn theo giá trị cốt lõi của bạn, không chỉ theo cảm xúc nhất thời.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Biểu tượng cho syzygy - sự kết hợp giữa Anima và Animus bên trong tâm hồn, đại diện cho tiến trình tích hợp các cực đối lập (nam/nữ, lý trí/cảm xúc) để hướng tới sự toàn vẹn tâm lý.)"
  },
  {
    "id": "ar07",
    "name_vi": "Cỗ Xe",
    "name_en": "The Chariot",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 7,
    "element": "Nước",
    "astrology": "Cự Giải",
    "image": "assets/images/ar07.jpg",
    "keywords_upright": [
      "quyết tâm",
      "chiến thắng",
      "kiểm soát",
      "ý chí",
      "tiến về phía trước"
    ],
    "keywords_reversed": [
      "mất phương hướng",
      "thiếu kiểm soát",
      "trì trệ",
      "xung đột nội tâm"
    ],
    "meaning_upright": "Ý chí mạnh mẽ và sự tập trung sẽ giúp bạn vượt qua trở ngại để giành chiến thắng. Hãy giữ vững tay lái và tiến về phía trước với quyết tâm.",
    "meaning_reversed": "Bạn đang mất phương hướng hoặc để những lực lượng đối lập bên trong kéo bạn về hai hướng khác nhau, khiến hành trình bị đình trệ.",
    "love": "Vượt qua trở ngại bên ngoài để giữ mối quan hệ đi đúng hướng.",
    "career": "Thành công nhờ quyết tâm, phù hợp cho đàm phán, cạnh tranh, di chuyển.",
    "advice": "Xác định rõ mục tiêu và giữ kỷ luật, đừng để phân tâm.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Thể hiện cái Tôi (ego) đang chủ động khẳng định ý chí, huy động những xung lực đối nghịch bên trong để tiến về phía trước - giai đoạn 'anh hùng' trong hành trình cá nhân hóa, khi con người học cách làm chủ chính mình trước khi làm chủ hoàn cảnh.)"
  },
  {
    "id": "ar08",
    "name_vi": "Sức Mạnh",
    "name_en": "Strength",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 8,
    "element": "Lửa",
    "astrology": "Sư Tử",
    "image": "assets/images/ar08.jpg",
    "keywords_upright": [
      "dũng cảm nội tâm",
      "kiên nhẫn",
      "lòng trắc ẩn",
      "chế ngự bản năng"
    ],
    "keywords_reversed": [
      "nghi ngờ bản thân",
      "yếu đuối",
      "mất kiên nhẫn",
      "dùng vũ lực"
    ],
    "meaning_upright": "Sức mạnh thật sự đến từ sự dịu dàng, kiên nhẫn và lòng trắc ẩn chứ không phải vũ lực. Bạn có khả năng chế ngự khó khăn bằng nội lực vững vàng.",
    "meaning_reversed": "Sự nghi ngờ bản thân đang làm suy yếu bạn, hoặc bạn đang cố kiểm soát tình huống bằng cách gây áp lực thay vì kiên nhẫn.",
    "love": "Kiên nhẫn và bao dung giúp hàn gắn hoặc củng cố mối quan hệ.",
    "career": "Giữ bình tĩnh trước áp lực, dùng sự thuyết phục thay vì đối đầu.",
    "advice": "Đối mặt với nỗi sợ bằng sự dịu dàng thay vì chống cự gay gắt.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Miêu tả quá trình tích hợp Bóng Tối (shadow integration) bằng sự dịu dàng và lòng trắc ẩn thay vì đàn áp hay chối bỏ - sức mạnh thật sự đến từ việc thấu hiểu và làm bạn với phần bản năng trong chính mình.)"
  },
  {
    "id": "ar09",
    "name_vi": "Ẩn Sĩ",
    "name_en": "The Hermit",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 9,
    "element": "Đất",
    "astrology": "Xử Nữ",
    "image": "assets/images/ar09.jpg",
    "keywords_upright": [
      "tự vấn",
      "tìm kiếm nội tâm",
      "cô độc có ý nghĩa",
      "dẫn dắt bằng trí tuệ"
    ],
    "keywords_reversed": [
      "cô lập quá mức",
      "từ chối giúp đỡ",
      "lạc lối"
    ],
    "meaning_upright": "Đây là lúc lùi lại, tìm sự tĩnh lặng và tự vấn bản thân để tìm ra chân lý riêng của bạn. Sự cô độc lúc này mang tính xây dựng, không phải trốn tránh.",
    "meaning_reversed": "Sự cô lập đang trở nên quá mức, khiến bạn xa cách mọi người hoặc từ chối sự giúp đỡ cần thiết.",
    "love": "Cần không gian riêng để suy ngẫm trước khi tiến xa hơn trong quan hệ.",
    "career": "Nghiên cứu sâu, làm việc độc lập, tìm kiếm định hướng dài hạn.",
    "advice": "Cho phép bản thân thời gian ở một mình, nhưng đừng đóng cửa hoàn toàn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Gắn với nguyên mẫu Ông Già Thông Thái (Wise Old Man) - biểu tượng của trí tuệ nội tâm xuất hiện khi cá nhân rút lui khỏi thế giới bên ngoài để đi sâu vào hành trình cá nhân hóa, tìm ý nghĩa từ chính bên trong thay vì từ sự công nhận của người khác.)"
  },
  {
    "id": "ar10",
    "name_vi": "Bánh Xe Số Mệnh",
    "name_en": "Wheel of Fortune",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 10,
    "element": "Lửa",
    "astrology": "Sao Mộc",
    "image": "assets/images/ar10.jpg",
    "keywords_upright": [
      "vận mệnh",
      "chu kỳ",
      "thay đổi",
      "cơ hội bất ngờ",
      "định mệnh"
    ],
    "keywords_reversed": [
      "vận rủi",
      "kháng cự thay đổi",
      "vòng lặp tiêu cực"
    ],
    "meaning_upright": "Một bước ngoặt của số phận đang đến, mang theo thay đổi và cơ hội mới nằm ngoài tầm kiểm soát của bạn. Hãy đón nhận sự vận động tự nhiên của cuộc sống.",
    "meaning_reversed": "Vận rủi tạm thời hoặc cảm giác bị mắc kẹt trong một vòng lặp tiêu cực mà bạn đang cố kháng cự lại thay đổi cần thiết.",
    "love": "Một bước ngoặt bất ngờ trong mối quan hệ, tốt hay xấu tùy vào thái độ đón nhận.",
    "career": "Cơ hội đến bất ngờ, thời điểm thuận lợi để nắm bắt vận may.",
    "advice": "Chấp nhận rằng có những điều nằm ngoài tầm kiểm soát và học cách thích nghi.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Tượng trưng cho quy luật vận hành của cái Tôi Lớn (Self) và những vòng lặp tuần hoàn trong đời sống tâm linh, gắn liền với khái niệm đồng bộ tính (synchronicity) mà Jung đề xuất - những trùng hợp có ý nghĩa vượt ra ngoài quan hệ nhân quả thông thường.)"
  },
  {
    "id": "ar11",
    "name_vi": "Công Lý",
    "name_en": "Justice",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 11,
    "element": "Khí",
    "astrology": "Thiên Bình",
    "image": "assets/images/ar11.jpg",
    "keywords_upright": [
      "công bằng",
      "sự thật",
      "nhân quả",
      "trách nhiệm",
      "cân bằng"
    ],
    "keywords_reversed": [
      "bất công",
      "thiếu trách nhiệm",
      "thiên vị",
      "trốn tránh hậu quả"
    ],
    "meaning_upright": "Sự thật sẽ được phơi bày và mọi hành động đều dẫn đến hậu quả tương xứng. Đây là lúc đưa ra quyết định công bằng, khách quan và chịu trách nhiệm.",
    "meaning_reversed": "Bất công đang xảy ra, hoặc bạn đang né tránh trách nhiệm cho hành động của mình. Có thể có sự thiên vị trong một tình huống nào đó.",
    "love": "Cần sự công bằng, minh bạch và trung thực giữa hai bên.",
    "career": "Vấn đề pháp lý, hợp đồng, hoặc cần quyết định dựa trên sự thật khách quan.",
    "advice": "Cân nhắc mọi khía cạnh một cách khách quan trước khi phán xét.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Phản ánh chức năng tư duy (thinking function) đang tìm kiếm sự cân bằng nội tâm - khả năng phân định rạch ròi, đối chiếu giữa các phần đối lập trong tâm lý để đạt tới trạng thái quân bình.)"
  },
  {
    "id": "ar12",
    "name_vi": "Người Treo Ngược",
    "name_en": "The Hanged Man",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 12,
    "element": "Nước",
    "astrology": "Sao Hải Vương",
    "image": "assets/images/ar12.jpg",
    "keywords_upright": [
      "buông bỏ",
      "góc nhìn mới",
      "hy sinh tạm thời",
      "tạm dừng"
    ],
    "keywords_reversed": [
      "trì hoãn",
      "chống lại sự cần thiết buông bỏ",
      "hy sinh vô ích"
    ],
    "meaning_upright": "Đôi khi tiến bộ đến từ việc tạm dừng, buông bỏ và nhìn tình huống từ một góc độ hoàn toàn khác. Sự hy sinh tạm thời lúc này sẽ mang lại giác ngộ.",
    "meaning_reversed": "Bạn đang trì hoãn một sự buông bỏ cần thiết, hoặc hy sinh mà không mang lại giá trị thực sự nào.",
    "love": "Cần thay đổi góc nhìn về mối quan hệ, hoặc tạm dừng để suy xét lại.",
    "career": "Dự án bị đình trệ tạm thời - đây là cơ hội để nhìn nhận lại chiến lược.",
    "advice": "Chấp nhận tạm dừng thay vì cố gắng ép mọi thứ tiến lên.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Thể hiện trạng thái buông bỏ sự kiểm soát của cái Tôi, chuyển sang vị trí 'người chứng kiến' (witness consciousness) - một cách nhìn đảo ngược giúp tiếp cận những góc nhìn mà ý thức thông thường không chạm tới được.)"
  },
  {
    "id": "ar13",
    "name_vi": "Tử Thần",
    "name_en": "Death",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 13,
    "element": "Nước",
    "astrology": "Bọ Cạp",
    "image": "assets/images/ar13.jpg",
    "keywords_upright": [
      "kết thúc",
      "chuyển hóa",
      "khởi đầu mới",
      "buông bỏ quá khứ"
    ],
    "keywords_reversed": [
      "sợ thay đổi",
      "trì trệ",
      "cản trở chuyển hóa",
      "bám víu quá khứ"
    ],
    "meaning_upright": "Một chương quan trọng đang khép lại để mở đường cho sự chuyển hóa và khởi đầu mới. Đừng sợ kết thúc - nó là điều kiện cần để tái sinh.",
    "meaning_reversed": "Sự sợ hãi thay đổi đang khiến bạn bám víu vào những gì đã lỗi thời, gây ra trì trệ và cản trở quá trình chuyển hóa tự nhiên.",
    "love": "Kết thúc một giai đoạn để mối quan hệ bước sang trạng thái mới, hoặc chia tay cần thiết.",
    "career": "Kết thúc một công việc, dự án hoặc phương pháp cũ để mở ra hướng đi mới.",
    "advice": "Buông bỏ những gì đã hoàn thành vai trò của nó để đón nhận điều mới.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Biểu tượng cho cái chết mang tính tâm lý của một phần cái Tôi cũ (ego death) - điều kiện cần thiết để một hình thái mới của bản thân được sinh ra, phù hợp với quy luật biến hình (transformation) trong tiến trình cá nhân hóa.)"
  },
  {
    "id": "ar14",
    "name_vi": "Tiết Chế",
    "name_en": "Temperance",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 14,
    "element": "Lửa",
    "astrology": "Nhân Mã",
    "image": "assets/images/ar14.jpg",
    "keywords_upright": [
      "cân bằng",
      "điều độ",
      "hòa hợp",
      "kiên nhẫn",
      "hòa giải"
    ],
    "keywords_reversed": [
      "mất cân bằng",
      "thái quá",
      "xung đột nội tâm",
      "thiếu kiên nhẫn"
    ],
    "meaning_upright": "Sự pha trộn hài hòa giữa các thái cực đối lập đang mang lại cân bằng và bình yên. Kiên nhẫn và điều độ là chìa khóa lúc này.",
    "meaning_reversed": "Sự mất cân bằng, thái quá về một mặt nào đó (công việc, cảm xúc, thói quen) đang gây ra căng thẳng nội tâm.",
    "love": "Cần sự thỏa hiệp và kiên nhẫn để dung hòa những khác biệt.",
    "career": "Hợp tác đa bên, cần cách tiếp cận điều độ và từ tốn thay vì vội vàng.",
    "advice": "Tìm điểm trung dung thay vì nghiêng hẳn về một cực đoan nào.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Gợi nhắc quá trình giả kim tâm lý (psychological alchemy) mà Jung mô tả - sự dung hợp các đối cực để tạo ra 'chức năng siêu việt' (transcendent function), nơi những mâu thuẫn nội tâm được hòa giải thành một tổng thể mới.)"
  },
  {
    "id": "ar15",
    "name_vi": "Ác Quỷ",
    "name_en": "The Devil",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 15,
    "element": "Đất",
    "astrology": "Ma Kết",
    "image": "assets/images/ar15.jpg",
    "keywords_upright": [
      "ràng buộc",
      "cám dỗ",
      "chấp niệm vật chất",
      "thói quen xấu"
    ],
    "keywords_reversed": [
      "giải phóng",
      "nhận ra ràng buộc",
      "phá vỡ thói quen xấu"
    ],
    "meaning_upright": "Bạn đang bị ràng buộc bởi cám dỗ, thói quen xấu hoặc một mối quan hệ độc hại mà bản thân khó dứt ra, dù về bản chất sự ràng buộc này do chính bạn tạo nên.",
    "meaning_reversed": "Bạn đang bắt đầu nhận ra những ràng buộc của mình và tìm cách giải phóng bản thân khỏi thói quen hoặc mối quan hệ độc hại.",
    "love": "Mối quan hệ phụ thuộc, ghen tuông hoặc thu hút thể xác mạnh mẽ nhưng thiếu lành mạnh.",
    "career": "Cảm giác mắc kẹt trong công việc vì lý do tài chính, thiếu tự do.",
    "advice": "Nhận diện điều gì đang trói buộc bạn - đó là bước đầu để giải thoát.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Đại diện cho phần Bóng Tối (shadow) bị chối bỏ hoặc kìm nén, thường bị phóng chiếu (projection) lên người khác hay hoàn cảnh bên ngoài; nhận diện được nó là bước đầu tiên để giải phóng bản thân khỏi sự ràng buộc vô thức.)"
  },
  {
    "id": "ar16",
    "name_vi": "Tòa Tháp",
    "name_en": "The Tower",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 16,
    "element": "Lửa",
    "astrology": "Sao Hỏa",
    "image": "assets/images/ar16.jpg",
    "keywords_upright": [
      "biến động đột ngột",
      "sụp đổ cần thiết",
      "sự thật phơi bày"
    ],
    "keywords_reversed": [
      "tránh né khủng hoảng",
      "sợ thay đổi",
      "thảm họa bị trì hoãn"
    ],
    "meaning_upright": "Một biến cố bất ngờ làm sụp đổ những nền tảng ảo tưởng, phơi bày sự thật mà bạn đã né tránh. Dù đau đớn, đây là sự phá vỡ cần thiết để xây dựng lại vững chắc hơn.",
    "meaning_reversed": "Bạn đang cố tránh né một cuộc khủng hoảng sắp xảy ra, nhưng sự trì hoãn này có thể khiến hậu quả tích tụ lớn hơn.",
    "love": "Một sự thật gây sốc làm thay đổi hoàn toàn mối quan hệ.",
    "career": "Biến động bất ngờ như mất việc, thay đổi tổ chức đột ngột.",
    "advice": "Đối mặt trực tiếp với khủng hoảng thay vì né tránh, vì nó sẽ dẫn đến điều tốt hơn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Miêu tả sự sụp đổ đột ngột của những cấu trúc phòng vệ giả tạo mà cái Tôi dựng lên - một cuộc khủng hoảng cần thiết để phá vỡ ảo tưởng và mở đường cho nhận thức chân thực hơn.)"
  },
  {
    "id": "ar17",
    "name_vi": "Ngôi Sao",
    "name_en": "The Star",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 17,
    "element": "Khí",
    "astrology": "Bảo Bình",
    "image": "assets/images/ar17.jpg",
    "keywords_upright": [
      "hy vọng",
      "niềm tin",
      "chữa lành",
      "cảm hứng",
      "bình yên"
    ],
    "keywords_reversed": [
      "tuyệt vọng",
      "mất niềm tin",
      "thiếu định hướng",
      "kiệt sức"
    ],
    "meaning_upright": "Sau giai đoạn khó khăn, hy vọng và sự chữa lành đang xuất hiện. Hãy tin tưởng vào tương lai và để cảm hứng dẫn lối cho bạn.",
    "meaning_reversed": "Bạn đang cảm thấy tuyệt vọng hoặc mất niềm tin vào tương lai, cảm giác thiếu định hướng và kiệt sức về tinh thần.",
    "love": "Hy vọng về một tương lai tươi sáng hơn cho mối quan hệ, sự chân thành trở lại.",
    "career": "Cảm hứng mới mẻ, dự án mang tính lý tưởng, phục hồi sau khó khăn.",
    "advice": "Giữ vững niềm tin ngay cả khi kết quả chưa rõ ràng.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Xuất hiện sau giai đoạn khủng hoảng, tượng trưng cho cái Tôi Lớn (Self) dần lộ diện - nguồn hy vọng, niềm tin và khả năng tự chữa lành khi cá nhân kết nối lại với phần sâu thẳm nhất trong mình.)"
  },
  {
    "id": "ar18",
    "name_vi": "Mặt Trăng",
    "name_en": "The Moon",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 18,
    "element": "Nước",
    "astrology": "Song Ngư",
    "image": "assets/images/ar18.jpg",
    "keywords_upright": [
      "ảo giác",
      "sợ hãi tiềm thức",
      "trực giác mơ hồ",
      "bất định"
    ],
    "keywords_reversed": [
      "nhầm lẫn được giải tỏa",
      "sự thật dần sáng tỏ",
      "vượt qua sợ hãi"
    ],
    "meaning_upright": "Có những điều chưa rõ ràng, dễ gây hiểu lầm hoặc lo lắng vô cớ. Hãy thận trọng với ảo giác và lắng nghe trực giác nhưng đừng vội kết luận.",
    "meaning_reversed": "Sự nhầm lẫn, sợ hãi hoặc bí mật trước đó đang dần được sáng tỏ, giúp bạn nhìn nhận vấn đề rõ ràng hơn.",
    "love": "Sự không chắc chắn, nghi ngờ hoặc điều gì đó chưa được nói ra hết.",
    "career": "Tình huống mập mờ, thiếu thông tin rõ ràng, cần thêm thời gian xác minh.",
    "advice": "Đừng để nỗi sợ hoặc tin đồn dẫn dắt quyết định của bạn - hãy tìm sự thật.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Gắn với vùng vô thức còn mơ hồ, nơi Anima hiện diện qua giấc mơ, trí tưởng tượng và nỗi sợ hãi chưa được gọi tên - lá bài mời gọi đối diện với những gì chưa được ý thức hóa thay vì né tránh.)"
  },
  {
    "id": "ar19",
    "name_vi": "Mặt Trời",
    "name_en": "The Sun",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 19,
    "element": "Lửa",
    "astrology": "Mặt Trời",
    "image": "assets/images/ar19.jpg",
    "keywords_upright": [
      "niềm vui",
      "thành công",
      "sức sống",
      "sự thật rõ ràng",
      "lạc quan"
    ],
    "keywords_reversed": [
      "u ám tạm thời",
      "tự tin thái quá",
      "trì hoãn niềm vui"
    ],
    "meaning_upright": "Niềm vui, sự thành công và nguồn năng lượng tích cực đang chiếu sáng con đường của bạn. Mọi thứ trở nên rõ ràng và đầy hứa hẹn.",
    "meaning_reversed": "Một đám mây u ám tạm thời che khuất niềm vui, hoặc sự tự tin thái quá đang khiến bạn bỏ qua chi tiết quan trọng.",
    "love": "Hạnh phúc, sự chân thành và niềm vui chung trong mối quan hệ.",
    "career": "Thành công được công nhận, dự án tiến triển thuận lợi và rõ ràng.",
    "advice": "Tận hưởng thành quả nhưng vẫn giữ sự khiêm tốn và tỉnh táo.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Biểu trưng cho ánh sáng của ý thức (consciousness) chiếu rọi, khi cái Tôi được là chính mình một cách hồn nhiên, trọn vẹn - trạng thái tâm lý lành mạnh khi các phần trong nội tâm không còn xung đột gay gắt.)"
  },
  {
    "id": "ar20",
    "name_vi": "Phán Xét",
    "name_en": "Judgement",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 20,
    "element": "Lửa",
    "astrology": "Sao Diêm Vương",
    "image": "assets/images/ar20.jpg",
    "keywords_upright": [
      "thức tỉnh",
      "tha thứ",
      "đánh giá lại",
      "tái sinh",
      "lời gọi"
    ],
    "keywords_reversed": [
      "tự phán xét khắt khe",
      "sợ thay đổi",
      "bỏ lỡ cơ hội chuộc lỗi"
    ],
    "meaning_upright": "Một lời gọi thức tỉnh đang thôi thúc bạn nhìn lại quá khứ, tha thứ và bước vào một phiên bản mới của chính mình.",
    "meaning_reversed": "Bạn đang tự phán xét bản thân quá khắt khe hoặc sợ đối mặt với thay đổi cần thiết để tái sinh.",
    "love": "Sự tha thứ, hàn gắn hoặc quyết định quan trọng dựa trên nhìn lại quá khứ.",
    "career": "Đánh giá lại con đường sự nghiệp, có thể là một lời mời gọi thay đổi lớn.",
    "advice": "Nhìn lại quá khứ với lòng khoan dung để tiến về phía trước nhẹ nhàng hơn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Thể hiện tiếng gọi của tiến trình cá nhân hóa (the call to individuation) - thời điểm cá nhân buộc phải nhìn lại bản thân một cách trung thực và đưa ra lựa chọn mang tính bước ngoặt cho hành trình trưởng thành tâm lý.)"
  },
  {
    "id": "ar21",
    "name_vi": "Thế Giới",
    "name_en": "The World",
    "arcana": "major",
    "suit": null,
    "suit_vi": null,
    "number": 21,
    "element": "Đất",
    "astrology": "Sao Thổ",
    "image": "assets/images/ar21.jpg",
    "keywords_upright": [
      "hoàn thành",
      "viên mãn",
      "tổng kết chu kỳ",
      "thành tựu"
    ],
    "keywords_reversed": [
      "dang dở",
      "thiếu kết thúc trọn vẹn",
      "trì hoãn thành công"
    ],
    "meaning_upright": "Một chu kỳ quan trọng đang được hoàn thành trọn vẹn, mang lại cảm giác viên mãn và sẵn sàng cho hành trình tiếp theo.",
    "meaning_reversed": "Có điều gì đó vẫn còn dang dở, khiến bạn chưa thể cảm nhận trọn vẹn sự hoàn thành, hoặc thành công đang bị trì hoãn.",
    "love": "Mối quan hệ đạt đến sự viên mãn, hoặc một chương tình cảm khép lại trọn vẹn.",
    "career": "Hoàn thành dự án lớn, đạt được mục tiêu dài hạn, được công nhận toàn diện.",
    "advice": "Ăn mừng thành quả trước khi bắt đầu chu kỳ mới.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Đại diện cho sự hoàn tất của tiến trình cá nhân hóa - trạng thái cái Tôi Lớn (Self) được tích hợp trọn vẹn, giống hình ảnh mandala tượng trưng cho sự toàn vẹn và hài hòa giữa mọi phần của tâm hồn.)"
  },
  {
    "id": "waac",
    "name_vi": "Con Át Gậy",
    "name_en": "Ace of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 1,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/waac.jpg",
    "keywords_upright": [
      "khởi đầu mới",
      "tiềm năng thuần khiết",
      "cơ hội"
    ],
    "keywords_reversed": [
      "cơ hội bị bỏ lỡ",
      "khởi đầu trì trệ",
      "chặn dòng năng lượng"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, một khởi đầu mới đầy tiềm năng, hạt giống thuần khiết của năng lượng chất bài này.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, cơ hội bị bỏ lỡ, khởi đầu chậm trễ hoặc năng lượng chưa được khơi thông.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài là hạt giống, tiềm năng thuần khiết ban đầu của chức năng này, chưa bị pha trộn hay thử thách bởi hoàn cảnh.)"
  },
  {
    "id": "wa02",
    "name_vi": "Hai Gậy",
    "name_en": "2 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 2,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa02.jpg",
    "keywords_upright": [
      "lên kế hoạch",
      "cân nhắc",
      "tầm nhìn",
      "lựa chọn"
    ],
    "keywords_reversed": [
      "do dự",
      "mất cân bằng",
      "trì hoãn quyết định"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, lên kế hoạch, cân nhắc lựa chọn và tầm nhìn xa cho bước tiếp theo.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, do dự kéo dài, thiếu quyết đoán hoặc mất cân bằng giữa các lựa chọn.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài đánh dấu sự phân đôi hoặc đối lập đầu tiên trong chức năng này - khoảnh khắc nhận ra có nhiều hơn một khả năng, cần lựa chọn hoặc cân bằng.)"
  },
  {
    "id": "wa03",
    "name_vi": "Ba Gậy",
    "name_en": "3 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 3,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa03.jpg",
    "keywords_upright": [
      "mở rộng",
      "hợp tác",
      "kết quả ban đầu"
    ],
    "keywords_reversed": [
      "chậm trễ",
      "thất vọng nhẹ",
      "thiếu phối hợp"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, mở rộng, hợp tác và bắt đầu thấy kết quả ban đầu từ nỗ lực đã bỏ ra.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, chậm trễ trong hợp tác, kỳ vọng chưa được đáp ứng hoặc thiếu sự phối hợp.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài cho thấy chức năng này bắt đầu mở rộng ra bên ngoài, kết nối với người khác hoặc hoàn cảnh, mang tính chia sẻ và hợp tác.)"
  },
  {
    "id": "wa04",
    "name_vi": "Bốn Gậy",
    "name_en": "4 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 4,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa04.jpg",
    "keywords_upright": [
      "ổn định",
      "ăn mừng",
      "an toàn"
    ],
    "keywords_reversed": [
      "bất ổn",
      "trì hoãn",
      "thiếu gắn kết"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, ổn định, ăn mừng và cảm giác an toàn sau một giai đoạn nỗ lực.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, mất ổn định tạm thời, trì hoãn lễ ăn mừng hoặc cảm giác chưa an toàn.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài là giai đoạn ổn định, xây dựng cấu trúc cho chức năng này - tạm dừng lại để củng cố nền tảng đã đạt được.)"
  },
  {
    "id": "wa05",
    "name_vi": "Năm Gậy",
    "name_en": "5 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 5,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa05.jpg",
    "keywords_upright": [
      "cạnh tranh",
      "xung đột",
      "thử thách"
    ],
    "keywords_reversed": [
      "hóa giải xung đột",
      "mệt mỏi",
      "tránh né đối đầu"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, cạnh tranh, xung đột hoặc thử thách cần vượt qua để trưởng thành.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, xung đột được hóa giải, hoặc mệt mỏi kéo dài vì tranh đấu không hồi kết.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài phản ánh một khủng hoảng hoặc xung đột nội tâm liên quan đến chức năng này - những gì tưởng chừng ổn định bị thử thách, buộc phải điều chỉnh.)"
  },
  {
    "id": "wa06",
    "name_vi": "Sáu Gậy",
    "name_en": "6 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 6,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa06.jpg",
    "keywords_upright": [
      "chiến thắng",
      "công nhận",
      "hài hòa"
    ],
    "keywords_reversed": [
      "thiếu công nhận",
      "hoài niệm",
      "chiến thắng nửa vời"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, chiến thắng, được công nhận hoặc tìm lại sự hài hòa sau khó khăn.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, chiến thắng chưa trọn vẹn, thiếu sự công nhận xứng đáng hoặc hoài niệm quá khứ.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài cho thấy sự hài hòa được khôi phục sau khủng hoảng, chức năng này được cân bằng lại, thường gắn với ký ức, lòng biết ơn hoặc sự chia sẻ.)"
  },
  {
    "id": "wa07",
    "name_vi": "Bảy Gậy",
    "name_en": "7 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 7,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa07.jpg",
    "keywords_upright": [
      "kiên trì",
      "chiến lược",
      "giữ vững lập trường"
    ],
    "keywords_reversed": [
      "từ bỏ",
      "thiếu chiến lược",
      "bị áp đảo"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, kiên trì, đánh giá lại chiến lược và giữ vững lập trường trước thử thách.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, từ bỏ quá sớm, thiếu chiến lược rõ ràng hoặc bị áp đảo bởi khó khăn.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài đặt ra một thử thách mang tính nội tâm nhiều hơn ngoại cảnh - chức năng này được yêu cầu suy xét lại chiến lược, đối diện với hoài nghi hoặc ảo tưởng.)"
  },
  {
    "id": "wa08",
    "name_vi": "Tám Gậy",
    "name_en": "8 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 8,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa08.jpg",
    "keywords_upright": [
      "tiến triển nhanh",
      "tin tức mới",
      "hiệu quả"
    ],
    "keywords_reversed": [
      "trì trệ",
      "chậm trễ",
      "bế tắc"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, tiến triển nhanh chóng, tin tức mới hoặc giai đoạn bận rộn hiệu quả.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, trì trệ, tin tức bị trì hoãn hoặc cảm giác bế tắc không lối thoát.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài là giai đoạn vận động mạnh mẽ, chức năng này được đẩy tới hành động hoặc quyền lực cụ thể, tốc độ và cường độ tăng cao.)"
  },
  {
    "id": "wa09",
    "name_vi": "Chín Gậy",
    "name_en": "9 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 9,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa09.jpg",
    "keywords_upright": [
      "kiên cường",
      "cảnh giác",
      "gần đích"
    ],
    "keywords_reversed": [
      "kiệt sức",
      "hoang mang",
      "mất niềm tin"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, kiên cường, gần đạt được mục tiêu dù đã mệt mỏi và cần thận trọng.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, kiệt sức, hoang mang hoặc mất niềm tin ngay trước ngưỡng thành công.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài cho thấy sự gần đạt tới viên mãn của chu kỳ - chức năng này đã tích lũy đủ kinh nghiệm nhưng vẫn cần thêm sự kiên định trước khi hoàn tất.)"
  },
  {
    "id": "wa10",
    "name_vi": "Mười Gậy",
    "name_en": "10 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": 10,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wa10.jpg",
    "keywords_upright": [
      "hoàn thành chu kỳ",
      "gánh nặng",
      "trách nhiệm"
    ],
    "keywords_reversed": [
      "giải tỏa gánh nặng",
      "quá tải",
      "kiệt sức kéo dài"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, hoàn thành một chu kỳ, dù có thể đi kèm gánh nặng hoặc trách nhiệm lớn.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, giải phóng bớt gánh nặng, hoặc cảm giác quá tải kéo dài chưa được giải quyết.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Ở vị trí số này, lá bài đánh dấu sự hoàn tất một chu kỳ trọn vẹn của chức năng này, đồng thời mở ra ngưỡng cửa để bắt đầu một chu kỳ mới ở cấp độ cao hơn.)"
  },
  {
    "id": "wapa",
    "name_vi": "Trang Gậy",
    "name_en": "Page of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": null,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wapa.jpg",
    "keywords_upright": [
      "tò mò",
      "học hỏi",
      "tin tức mới"
    ],
    "keywords_reversed": [
      "thiếu chín chắn",
      "do dự",
      "tin đồn"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, một tin tức mới, sự tò mò và tinh thần học hỏi non trẻ trong lĩnh vực của chất bài này.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, tin tức chưa chắc chắn, sự thiếu chín chắn hoặc do dự trước điều mới mẻ.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Là quân bài chân dung, lá bài là hiện thân của một persona còn non trẻ đang học hỏi chức năng này - sự tò mò, ham học hỏi nhưng còn thiếu kinh nghiệm thực tế.)"
  },
  {
    "id": "wakn",
    "name_vi": "Hiệp Sĩ Gậy",
    "name_en": "Knight of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": null,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/wakn.jpg",
    "keywords_upright": [
      "hành động",
      "nhiệt huyết",
      "theo đuổi mục tiêu"
    ],
    "keywords_reversed": [
      "bốc đồng",
      "cực đoan",
      "thiếu kiên nhẫn"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, hành động quyết liệt, theo đuổi mục tiêu với nhiệt huyết đặc trưng của chất bài này.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, hành động bốc đồng, thiếu kiên nhẫn hoặc theo đuổi một cách cực đoan.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Là quân bài chân dung, lá bài thể hiện chức năng này ở trạng thái cực đoan, bốc đồng, hướng ngoại mạnh mẽ - cái Tôi hành động theo bản năng nhiều hơn là cân nhắc.)"
  },
  {
    "id": "waqu",
    "name_vi": "Hoàng Hậu Gậy",
    "name_en": "Queen of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": null,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/waqu.jpg",
    "keywords_upright": [
      "trưởng thành",
      "thấu hiểu",
      "nuôi dưỡng nội tâm"
    ],
    "keywords_reversed": [
      "mất kết nối bản thân",
      "thái quá",
      "bất an nội tâm"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, sự trưởng thành, thấu hiểu sâu sắc và khả năng nuôi dưỡng năng lượng của chất bài này từ bên trong.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, mất kết nối với bản chất của chính mình, hoặc bộc lộ theo hướng thái quá, thiếu lành mạnh.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Là quân bài chân dung, lá bài thể hiện chức năng này đã được nội tâm hóa và làm chủ từ bên trong - biểu hiện chín chắn, tinh tế của nguyên mẫu Anima trong lĩnh vực này.)"
  },
  {
    "id": "waki",
    "name_vi": "Vua Gậy",
    "name_en": "King of Wands",
    "arcana": "minor",
    "suit": "wands",
    "suit_vi": "Gậy",
    "number": null,
    "element": "Lửa",
    "astrology": null,
    "image": "assets/images/waki.jpg",
    "keywords_upright": [
      "làm chủ",
      "quyền lực vững vàng",
      "dẫn dắt"
    ],
    "keywords_reversed": [
      "độc đoán",
      "lạm quyền",
      "khô khan"
    ],
    "meaning_upright": "Về hành động, đam mê, sự nghiệp và sáng tạo, sự làm chủ, quyền lực vững vàng và khả năng dẫn dắt bằng kinh nghiệm trong lĩnh vực này.",
    "meaning_reversed": "Về hành động, đam mê, sự nghiệp và sáng tạo, lạm dụng quyền lực, độc đoán hoặc thiếu cảm xúc/khô khan khi thực thi quyền lực.",
    "love": "Đam mê và nhiệt huyết trong tình cảm, hành động thể hiện tình yêu.",
    "career": "Sáng kiến, khởi xướng dự án, thể hiện năng lực lãnh đạo.",
    "advice": "Hành động dứt khoát nhưng đừng để nhiệt huyết lấn át sự kiên nhẫn.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (lửa - tinh thần và ý chí sáng tạo) tương ứng với chức năng Trực giác. Là quân bài chân dung, lá bài thể hiện chức năng này được làm chủ và biểu hiện ra bên ngoài với thẩm quyền - hình ảnh trưởng thành của nguyên mẫu Animus/Người Cha trong lĩnh vực này.)"
  },
  {
    "id": "cuac",
    "name_vi": "Con Át Ly",
    "name_en": "Ace of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 1,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cuac.jpg",
    "keywords_upright": [
      "khởi đầu mới",
      "tiềm năng thuần khiết",
      "cơ hội"
    ],
    "keywords_reversed": [
      "cơ hội bị bỏ lỡ",
      "khởi đầu trì trệ",
      "chặn dòng năng lượng"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, một khởi đầu mới đầy tiềm năng, hạt giống thuần khiết của năng lượng chất bài này.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, cơ hội bị bỏ lỡ, khởi đầu chậm trễ hoặc năng lượng chưa được khơi thông.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài là hạt giống, tiềm năng thuần khiết ban đầu của chức năng này, chưa bị pha trộn hay thử thách bởi hoàn cảnh.)"
  },
  {
    "id": "cu02",
    "name_vi": "Hai Ly",
    "name_en": "2 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 2,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu02.jpg",
    "keywords_upright": [
      "lên kế hoạch",
      "cân nhắc",
      "tầm nhìn",
      "lựa chọn"
    ],
    "keywords_reversed": [
      "do dự",
      "mất cân bằng",
      "trì hoãn quyết định"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, lên kế hoạch, cân nhắc lựa chọn và tầm nhìn xa cho bước tiếp theo.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, do dự kéo dài, thiếu quyết đoán hoặc mất cân bằng giữa các lựa chọn.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài đánh dấu sự phân đôi hoặc đối lập đầu tiên trong chức năng này - khoảnh khắc nhận ra có nhiều hơn một khả năng, cần lựa chọn hoặc cân bằng.)"
  },
  {
    "id": "cu03",
    "name_vi": "Ba Ly",
    "name_en": "3 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 3,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu03.jpg",
    "keywords_upright": [
      "mở rộng",
      "hợp tác",
      "kết quả ban đầu"
    ],
    "keywords_reversed": [
      "chậm trễ",
      "thất vọng nhẹ",
      "thiếu phối hợp"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, mở rộng, hợp tác và bắt đầu thấy kết quả ban đầu từ nỗ lực đã bỏ ra.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, chậm trễ trong hợp tác, kỳ vọng chưa được đáp ứng hoặc thiếu sự phối hợp.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài cho thấy chức năng này bắt đầu mở rộng ra bên ngoài, kết nối với người khác hoặc hoàn cảnh, mang tính chia sẻ và hợp tác.)"
  },
  {
    "id": "cu04",
    "name_vi": "Bốn Ly",
    "name_en": "4 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 4,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu04.jpg",
    "keywords_upright": [
      "ổn định",
      "ăn mừng",
      "an toàn"
    ],
    "keywords_reversed": [
      "bất ổn",
      "trì hoãn",
      "thiếu gắn kết"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, ổn định, ăn mừng và cảm giác an toàn sau một giai đoạn nỗ lực.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, mất ổn định tạm thời, trì hoãn lễ ăn mừng hoặc cảm giác chưa an toàn.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài là giai đoạn ổn định, xây dựng cấu trúc cho chức năng này - tạm dừng lại để củng cố nền tảng đã đạt được.)"
  },
  {
    "id": "cu05",
    "name_vi": "Năm Ly",
    "name_en": "5 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 5,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu05.jpg",
    "keywords_upright": [
      "cạnh tranh",
      "xung đột",
      "thử thách"
    ],
    "keywords_reversed": [
      "hóa giải xung đột",
      "mệt mỏi",
      "tránh né đối đầu"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, cạnh tranh, xung đột hoặc thử thách cần vượt qua để trưởng thành.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, xung đột được hóa giải, hoặc mệt mỏi kéo dài vì tranh đấu không hồi kết.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài phản ánh một khủng hoảng hoặc xung đột nội tâm liên quan đến chức năng này - những gì tưởng chừng ổn định bị thử thách, buộc phải điều chỉnh.)"
  },
  {
    "id": "cu06",
    "name_vi": "Sáu Ly",
    "name_en": "6 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 6,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu06.jpg",
    "keywords_upright": [
      "chiến thắng",
      "công nhận",
      "hài hòa"
    ],
    "keywords_reversed": [
      "thiếu công nhận",
      "hoài niệm",
      "chiến thắng nửa vời"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, chiến thắng, được công nhận hoặc tìm lại sự hài hòa sau khó khăn.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, chiến thắng chưa trọn vẹn, thiếu sự công nhận xứng đáng hoặc hoài niệm quá khứ.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài cho thấy sự hài hòa được khôi phục sau khủng hoảng, chức năng này được cân bằng lại, thường gắn với ký ức, lòng biết ơn hoặc sự chia sẻ.)"
  },
  {
    "id": "cu07",
    "name_vi": "Bảy Ly",
    "name_en": "7 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 7,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu07.jpg",
    "keywords_upright": [
      "kiên trì",
      "chiến lược",
      "giữ vững lập trường"
    ],
    "keywords_reversed": [
      "từ bỏ",
      "thiếu chiến lược",
      "bị áp đảo"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, kiên trì, đánh giá lại chiến lược và giữ vững lập trường trước thử thách.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, từ bỏ quá sớm, thiếu chiến lược rõ ràng hoặc bị áp đảo bởi khó khăn.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài đặt ra một thử thách mang tính nội tâm nhiều hơn ngoại cảnh - chức năng này được yêu cầu suy xét lại chiến lược, đối diện với hoài nghi hoặc ảo tưởng.)"
  },
  {
    "id": "cu08",
    "name_vi": "Tám Ly",
    "name_en": "8 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 8,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu08.jpg",
    "keywords_upright": [
      "tiến triển nhanh",
      "tin tức mới",
      "hiệu quả"
    ],
    "keywords_reversed": [
      "trì trệ",
      "chậm trễ",
      "bế tắc"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, tiến triển nhanh chóng, tin tức mới hoặc giai đoạn bận rộn hiệu quả.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, trì trệ, tin tức bị trì hoãn hoặc cảm giác bế tắc không lối thoát.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài là giai đoạn vận động mạnh mẽ, chức năng này được đẩy tới hành động hoặc quyền lực cụ thể, tốc độ và cường độ tăng cao.)"
  },
  {
    "id": "cu09",
    "name_vi": "Chín Ly",
    "name_en": "9 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 9,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu09.jpg",
    "keywords_upright": [
      "kiên cường",
      "cảnh giác",
      "gần đích"
    ],
    "keywords_reversed": [
      "kiệt sức",
      "hoang mang",
      "mất niềm tin"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, kiên cường, gần đạt được mục tiêu dù đã mệt mỏi và cần thận trọng.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, kiệt sức, hoang mang hoặc mất niềm tin ngay trước ngưỡng thành công.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài cho thấy sự gần đạt tới viên mãn của chu kỳ - chức năng này đã tích lũy đủ kinh nghiệm nhưng vẫn cần thêm sự kiên định trước khi hoàn tất.)"
  },
  {
    "id": "cu10",
    "name_vi": "Mười Ly",
    "name_en": "10 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": 10,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cu10.jpg",
    "keywords_upright": [
      "hoàn thành chu kỳ",
      "gánh nặng",
      "trách nhiệm"
    ],
    "keywords_reversed": [
      "giải tỏa gánh nặng",
      "quá tải",
      "kiệt sức kéo dài"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, hoàn thành một chu kỳ, dù có thể đi kèm gánh nặng hoặc trách nhiệm lớn.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, giải phóng bớt gánh nặng, hoặc cảm giác quá tải kéo dài chưa được giải quyết.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Ở vị trí số này, lá bài đánh dấu sự hoàn tất một chu kỳ trọn vẹn của chức năng này, đồng thời mở ra ngưỡng cửa để bắt đầu một chu kỳ mới ở cấp độ cao hơn.)"
  },
  {
    "id": "cupa",
    "name_vi": "Trang Ly",
    "name_en": "Page of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": null,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cupa.jpg",
    "keywords_upright": [
      "tò mò",
      "học hỏi",
      "tin tức mới"
    ],
    "keywords_reversed": [
      "thiếu chín chắn",
      "do dự",
      "tin đồn"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, một tin tức mới, sự tò mò và tinh thần học hỏi non trẻ trong lĩnh vực của chất bài này.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, tin tức chưa chắc chắn, sự thiếu chín chắn hoặc do dự trước điều mới mẻ.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Là quân bài chân dung, lá bài là hiện thân của một persona còn non trẻ đang học hỏi chức năng này - sự tò mò, ham học hỏi nhưng còn thiếu kinh nghiệm thực tế.)"
  },
  {
    "id": "cukn",
    "name_vi": "Hiệp Sĩ Ly",
    "name_en": "Knight of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": null,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cukn.jpg",
    "keywords_upright": [
      "hành động",
      "nhiệt huyết",
      "theo đuổi mục tiêu"
    ],
    "keywords_reversed": [
      "bốc đồng",
      "cực đoan",
      "thiếu kiên nhẫn"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, hành động quyết liệt, theo đuổi mục tiêu với nhiệt huyết đặc trưng của chất bài này.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, hành động bốc đồng, thiếu kiên nhẫn hoặc theo đuổi một cách cực đoan.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Là quân bài chân dung, lá bài thể hiện chức năng này ở trạng thái cực đoan, bốc đồng, hướng ngoại mạnh mẽ - cái Tôi hành động theo bản năng nhiều hơn là cân nhắc.)"
  },
  {
    "id": "cuqu",
    "name_vi": "Hoàng Hậu Ly",
    "name_en": "Queen of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": null,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cuqu.jpg",
    "keywords_upright": [
      "trưởng thành",
      "thấu hiểu",
      "nuôi dưỡng nội tâm"
    ],
    "keywords_reversed": [
      "mất kết nối bản thân",
      "thái quá",
      "bất an nội tâm"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, sự trưởng thành, thấu hiểu sâu sắc và khả năng nuôi dưỡng năng lượng của chất bài này từ bên trong.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, mất kết nối với bản chất của chính mình, hoặc bộc lộ theo hướng thái quá, thiếu lành mạnh.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Là quân bài chân dung, lá bài thể hiện chức năng này đã được nội tâm hóa và làm chủ từ bên trong - biểu hiện chín chắn, tinh tế của nguyên mẫu Anima trong lĩnh vực này.)"
  },
  {
    "id": "cuki",
    "name_vi": "Vua Ly",
    "name_en": "King of Cups",
    "arcana": "minor",
    "suit": "cups",
    "suit_vi": "Ly",
    "number": null,
    "element": "Nước",
    "astrology": null,
    "image": "assets/images/cuki.jpg",
    "keywords_upright": [
      "làm chủ",
      "quyền lực vững vàng",
      "dẫn dắt"
    ],
    "keywords_reversed": [
      "độc đoán",
      "lạm quyền",
      "khô khan"
    ],
    "meaning_upright": "Về cảm xúc, tình yêu và trực giác, sự làm chủ, quyền lực vững vàng và khả năng dẫn dắt bằng kinh nghiệm trong lĩnh vực này.",
    "meaning_reversed": "Về cảm xúc, tình yêu và trực giác, lạm dụng quyền lực, độc đoán hoặc thiếu cảm xúc/khô khan khi thực thi quyền lực.",
    "love": "Cảm xúc, sự gắn kết và chiều sâu tình cảm trong mối quan hệ.",
    "career": "Công việc mang tính sáng tạo, chăm sóc con người hoặc nghệ thuật.",
    "advice": "Lắng nghe cảm xúc của bản thân và người khác trước khi quyết định.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (nước - tâm hồn và đời sống tình cảm) tương ứng với chức năng Cảm giác. Là quân bài chân dung, lá bài thể hiện chức năng này được làm chủ và biểu hiện ra bên ngoài với thẩm quyền - hình ảnh trưởng thành của nguyên mẫu Animus/Người Cha trong lĩnh vực này.)"
  },
  {
    "id": "swac",
    "name_vi": "Con Át Kiếm",
    "name_en": "Ace of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 1,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/swac.jpg",
    "keywords_upright": [
      "khởi đầu mới",
      "tiềm năng thuần khiết",
      "cơ hội"
    ],
    "keywords_reversed": [
      "cơ hội bị bỏ lỡ",
      "khởi đầu trì trệ",
      "chặn dòng năng lượng"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, một khởi đầu mới đầy tiềm năng, hạt giống thuần khiết của năng lượng chất bài này.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, cơ hội bị bỏ lỡ, khởi đầu chậm trễ hoặc năng lượng chưa được khơi thông.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài là hạt giống, tiềm năng thuần khiết ban đầu của chức năng này, chưa bị pha trộn hay thử thách bởi hoàn cảnh.)"
  },
  {
    "id": "sw02",
    "name_vi": "Hai Kiếm",
    "name_en": "2 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 2,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw02.jpg",
    "keywords_upright": [
      "lên kế hoạch",
      "cân nhắc",
      "tầm nhìn",
      "lựa chọn"
    ],
    "keywords_reversed": [
      "do dự",
      "mất cân bằng",
      "trì hoãn quyết định"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, lên kế hoạch, cân nhắc lựa chọn và tầm nhìn xa cho bước tiếp theo.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, do dự kéo dài, thiếu quyết đoán hoặc mất cân bằng giữa các lựa chọn.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài đánh dấu sự phân đôi hoặc đối lập đầu tiên trong chức năng này - khoảnh khắc nhận ra có nhiều hơn một khả năng, cần lựa chọn hoặc cân bằng.)"
  },
  {
    "id": "sw03",
    "name_vi": "Ba Kiếm",
    "name_en": "3 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 3,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw03.jpg",
    "keywords_upright": [
      "mở rộng",
      "hợp tác",
      "kết quả ban đầu"
    ],
    "keywords_reversed": [
      "chậm trễ",
      "thất vọng nhẹ",
      "thiếu phối hợp"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, mở rộng, hợp tác và bắt đầu thấy kết quả ban đầu từ nỗ lực đã bỏ ra.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, chậm trễ trong hợp tác, kỳ vọng chưa được đáp ứng hoặc thiếu sự phối hợp.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài cho thấy chức năng này bắt đầu mở rộng ra bên ngoài, kết nối với người khác hoặc hoàn cảnh, mang tính chia sẻ và hợp tác.)"
  },
  {
    "id": "sw04",
    "name_vi": "Bốn Kiếm",
    "name_en": "4 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 4,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw04.jpg",
    "keywords_upright": [
      "ổn định",
      "ăn mừng",
      "an toàn"
    ],
    "keywords_reversed": [
      "bất ổn",
      "trì hoãn",
      "thiếu gắn kết"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, ổn định, ăn mừng và cảm giác an toàn sau một giai đoạn nỗ lực.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, mất ổn định tạm thời, trì hoãn lễ ăn mừng hoặc cảm giác chưa an toàn.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài là giai đoạn ổn định, xây dựng cấu trúc cho chức năng này - tạm dừng lại để củng cố nền tảng đã đạt được.)"
  },
  {
    "id": "sw05",
    "name_vi": "Năm Kiếm",
    "name_en": "5 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 5,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw05.jpg",
    "keywords_upright": [
      "cạnh tranh",
      "xung đột",
      "thử thách"
    ],
    "keywords_reversed": [
      "hóa giải xung đột",
      "mệt mỏi",
      "tránh né đối đầu"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, cạnh tranh, xung đột hoặc thử thách cần vượt qua để trưởng thành.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, xung đột được hóa giải, hoặc mệt mỏi kéo dài vì tranh đấu không hồi kết.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài phản ánh một khủng hoảng hoặc xung đột nội tâm liên quan đến chức năng này - những gì tưởng chừng ổn định bị thử thách, buộc phải điều chỉnh.)"
  },
  {
    "id": "sw06",
    "name_vi": "Sáu Kiếm",
    "name_en": "6 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 6,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw06.jpg",
    "keywords_upright": [
      "chiến thắng",
      "công nhận",
      "hài hòa"
    ],
    "keywords_reversed": [
      "thiếu công nhận",
      "hoài niệm",
      "chiến thắng nửa vời"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, chiến thắng, được công nhận hoặc tìm lại sự hài hòa sau khó khăn.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, chiến thắng chưa trọn vẹn, thiếu sự công nhận xứng đáng hoặc hoài niệm quá khứ.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài cho thấy sự hài hòa được khôi phục sau khủng hoảng, chức năng này được cân bằng lại, thường gắn với ký ức, lòng biết ơn hoặc sự chia sẻ.)"
  },
  {
    "id": "sw07",
    "name_vi": "Bảy Kiếm",
    "name_en": "7 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 7,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw07.jpg",
    "keywords_upright": [
      "kiên trì",
      "chiến lược",
      "giữ vững lập trường"
    ],
    "keywords_reversed": [
      "từ bỏ",
      "thiếu chiến lược",
      "bị áp đảo"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, kiên trì, đánh giá lại chiến lược và giữ vững lập trường trước thử thách.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, từ bỏ quá sớm, thiếu chiến lược rõ ràng hoặc bị áp đảo bởi khó khăn.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài đặt ra một thử thách mang tính nội tâm nhiều hơn ngoại cảnh - chức năng này được yêu cầu suy xét lại chiến lược, đối diện với hoài nghi hoặc ảo tưởng.)"
  },
  {
    "id": "sw08",
    "name_vi": "Tám Kiếm",
    "name_en": "8 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 8,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw08.jpg",
    "keywords_upright": [
      "tiến triển nhanh",
      "tin tức mới",
      "hiệu quả"
    ],
    "keywords_reversed": [
      "trì trệ",
      "chậm trễ",
      "bế tắc"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, tiến triển nhanh chóng, tin tức mới hoặc giai đoạn bận rộn hiệu quả.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, trì trệ, tin tức bị trì hoãn hoặc cảm giác bế tắc không lối thoát.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài là giai đoạn vận động mạnh mẽ, chức năng này được đẩy tới hành động hoặc quyền lực cụ thể, tốc độ và cường độ tăng cao.)"
  },
  {
    "id": "sw09",
    "name_vi": "Chín Kiếm",
    "name_en": "9 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 9,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw09.jpg",
    "keywords_upright": [
      "kiên cường",
      "cảnh giác",
      "gần đích"
    ],
    "keywords_reversed": [
      "kiệt sức",
      "hoang mang",
      "mất niềm tin"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, kiên cường, gần đạt được mục tiêu dù đã mệt mỏi và cần thận trọng.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, kiệt sức, hoang mang hoặc mất niềm tin ngay trước ngưỡng thành công.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài cho thấy sự gần đạt tới viên mãn của chu kỳ - chức năng này đã tích lũy đủ kinh nghiệm nhưng vẫn cần thêm sự kiên định trước khi hoàn tất.)"
  },
  {
    "id": "sw10",
    "name_vi": "Mười Kiếm",
    "name_en": "10 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": 10,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/sw10.jpg",
    "keywords_upright": [
      "hoàn thành chu kỳ",
      "gánh nặng",
      "trách nhiệm"
    ],
    "keywords_reversed": [
      "giải tỏa gánh nặng",
      "quá tải",
      "kiệt sức kéo dài"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, hoàn thành một chu kỳ, dù có thể đi kèm gánh nặng hoặc trách nhiệm lớn.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, giải phóng bớt gánh nặng, hoặc cảm giác quá tải kéo dài chưa được giải quyết.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Ở vị trí số này, lá bài đánh dấu sự hoàn tất một chu kỳ trọn vẹn của chức năng này, đồng thời mở ra ngưỡng cửa để bắt đầu một chu kỳ mới ở cấp độ cao hơn.)"
  },
  {
    "id": "swpa",
    "name_vi": "Trang Kiếm",
    "name_en": "Page of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": null,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/swpa.jpg",
    "keywords_upright": [
      "tò mò",
      "học hỏi",
      "tin tức mới"
    ],
    "keywords_reversed": [
      "thiếu chín chắn",
      "do dự",
      "tin đồn"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, một tin tức mới, sự tò mò và tinh thần học hỏi non trẻ trong lĩnh vực của chất bài này.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, tin tức chưa chắc chắn, sự thiếu chín chắn hoặc do dự trước điều mới mẻ.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Là quân bài chân dung, lá bài là hiện thân của một persona còn non trẻ đang học hỏi chức năng này - sự tò mò, ham học hỏi nhưng còn thiếu kinh nghiệm thực tế.)"
  },
  {
    "id": "swkn",
    "name_vi": "Hiệp Sĩ Kiếm",
    "name_en": "Knight of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": null,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/swkn.jpg",
    "keywords_upright": [
      "hành động",
      "nhiệt huyết",
      "theo đuổi mục tiêu"
    ],
    "keywords_reversed": [
      "bốc đồng",
      "cực đoan",
      "thiếu kiên nhẫn"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, hành động quyết liệt, theo đuổi mục tiêu với nhiệt huyết đặc trưng của chất bài này.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, hành động bốc đồng, thiếu kiên nhẫn hoặc theo đuổi một cách cực đoan.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Là quân bài chân dung, lá bài thể hiện chức năng này ở trạng thái cực đoan, bốc đồng, hướng ngoại mạnh mẽ - cái Tôi hành động theo bản năng nhiều hơn là cân nhắc.)"
  },
  {
    "id": "swqu",
    "name_vi": "Hoàng Hậu Kiếm",
    "name_en": "Queen of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": null,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/swqu.jpg",
    "keywords_upright": [
      "trưởng thành",
      "thấu hiểu",
      "nuôi dưỡng nội tâm"
    ],
    "keywords_reversed": [
      "mất kết nối bản thân",
      "thái quá",
      "bất an nội tâm"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, sự trưởng thành, thấu hiểu sâu sắc và khả năng nuôi dưỡng năng lượng của chất bài này từ bên trong.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, mất kết nối với bản chất của chính mình, hoặc bộc lộ theo hướng thái quá, thiếu lành mạnh.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Là quân bài chân dung, lá bài thể hiện chức năng này đã được nội tâm hóa và làm chủ từ bên trong - biểu hiện chín chắn, tinh tế của nguyên mẫu Anima trong lĩnh vực này.)"
  },
  {
    "id": "swki",
    "name_vi": "Vua Kiếm",
    "name_en": "King of Swords",
    "arcana": "minor",
    "suit": "swords",
    "suit_vi": "Kiếm",
    "number": null,
    "element": "Khí",
    "astrology": null,
    "image": "assets/images/swki.jpg",
    "keywords_upright": [
      "làm chủ",
      "quyền lực vững vàng",
      "dẫn dắt"
    ],
    "keywords_reversed": [
      "độc đoán",
      "lạm quyền",
      "khô khan"
    ],
    "meaning_upright": "Về trí tuệ, xung đột và sự thật, sự làm chủ, quyền lực vững vàng và khả năng dẫn dắt bằng kinh nghiệm trong lĩnh vực này.",
    "meaning_reversed": "Về trí tuệ, xung đột và sự thật, lạm dụng quyền lực, độc đoán hoặc thiếu cảm xúc/khô khan khi thực thi quyền lực.",
    "love": "Giao tiếp thẳng thắn, xung đột cần giải quyết bằng lý trí.",
    "career": "Đàm phán, ra quyết định dựa trên phân tích và sự thật.",
    "advice": "Nói sự thật một cách khéo léo, tránh để cảm xúc chi phối lý trí.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (khí - trí tuệ và khả năng phân định) tương ứng với chức năng Tư duy. Là quân bài chân dung, lá bài thể hiện chức năng này được làm chủ và biểu hiện ra bên ngoài với thẩm quyền - hình ảnh trưởng thành của nguyên mẫu Animus/Người Cha trong lĩnh vực này.)"
  },
  {
    "id": "peac",
    "name_vi": "Con Át Tiền",
    "name_en": "Ace of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 1,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/peac.jpg",
    "keywords_upright": [
      "khởi đầu mới",
      "tiềm năng thuần khiết",
      "cơ hội"
    ],
    "keywords_reversed": [
      "cơ hội bị bỏ lỡ",
      "khởi đầu trì trệ",
      "chặn dòng năng lượng"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, một khởi đầu mới đầy tiềm năng, hạt giống thuần khiết của năng lượng chất bài này.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, cơ hội bị bỏ lỡ, khởi đầu chậm trễ hoặc năng lượng chưa được khơi thông.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài là hạt giống, tiềm năng thuần khiết ban đầu của chức năng này, chưa bị pha trộn hay thử thách bởi hoàn cảnh.)"
  },
  {
    "id": "pe02",
    "name_vi": "Hai Tiền",
    "name_en": "2 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 2,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe02.jpg",
    "keywords_upright": [
      "lên kế hoạch",
      "cân nhắc",
      "tầm nhìn",
      "lựa chọn"
    ],
    "keywords_reversed": [
      "do dự",
      "mất cân bằng",
      "trì hoãn quyết định"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, lên kế hoạch, cân nhắc lựa chọn và tầm nhìn xa cho bước tiếp theo.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, do dự kéo dài, thiếu quyết đoán hoặc mất cân bằng giữa các lựa chọn.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài đánh dấu sự phân đôi hoặc đối lập đầu tiên trong chức năng này - khoảnh khắc nhận ra có nhiều hơn một khả năng, cần lựa chọn hoặc cân bằng.)"
  },
  {
    "id": "pe03",
    "name_vi": "Ba Tiền",
    "name_en": "3 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 3,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe03.jpg",
    "keywords_upright": [
      "mở rộng",
      "hợp tác",
      "kết quả ban đầu"
    ],
    "keywords_reversed": [
      "chậm trễ",
      "thất vọng nhẹ",
      "thiếu phối hợp"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, mở rộng, hợp tác và bắt đầu thấy kết quả ban đầu từ nỗ lực đã bỏ ra.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, chậm trễ trong hợp tác, kỳ vọng chưa được đáp ứng hoặc thiếu sự phối hợp.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài cho thấy chức năng này bắt đầu mở rộng ra bên ngoài, kết nối với người khác hoặc hoàn cảnh, mang tính chia sẻ và hợp tác.)"
  },
  {
    "id": "pe04",
    "name_vi": "Bốn Tiền",
    "name_en": "4 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 4,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe04.jpg",
    "keywords_upright": [
      "ổn định",
      "ăn mừng",
      "an toàn"
    ],
    "keywords_reversed": [
      "bất ổn",
      "trì hoãn",
      "thiếu gắn kết"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, ổn định, ăn mừng và cảm giác an toàn sau một giai đoạn nỗ lực.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, mất ổn định tạm thời, trì hoãn lễ ăn mừng hoặc cảm giác chưa an toàn.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài là giai đoạn ổn định, xây dựng cấu trúc cho chức năng này - tạm dừng lại để củng cố nền tảng đã đạt được.)"
  },
  {
    "id": "pe05",
    "name_vi": "Năm Tiền",
    "name_en": "5 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 5,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe05.jpg",
    "keywords_upright": [
      "cạnh tranh",
      "xung đột",
      "thử thách"
    ],
    "keywords_reversed": [
      "hóa giải xung đột",
      "mệt mỏi",
      "tránh né đối đầu"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, cạnh tranh, xung đột hoặc thử thách cần vượt qua để trưởng thành.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, xung đột được hóa giải, hoặc mệt mỏi kéo dài vì tranh đấu không hồi kết.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài phản ánh một khủng hoảng hoặc xung đột nội tâm liên quan đến chức năng này - những gì tưởng chừng ổn định bị thử thách, buộc phải điều chỉnh.)"
  },
  {
    "id": "pe06",
    "name_vi": "Sáu Tiền",
    "name_en": "6 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 6,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe06.jpg",
    "keywords_upright": [
      "chiến thắng",
      "công nhận",
      "hài hòa"
    ],
    "keywords_reversed": [
      "thiếu công nhận",
      "hoài niệm",
      "chiến thắng nửa vời"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, chiến thắng, được công nhận hoặc tìm lại sự hài hòa sau khó khăn.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, chiến thắng chưa trọn vẹn, thiếu sự công nhận xứng đáng hoặc hoài niệm quá khứ.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài cho thấy sự hài hòa được khôi phục sau khủng hoảng, chức năng này được cân bằng lại, thường gắn với ký ức, lòng biết ơn hoặc sự chia sẻ.)"
  },
  {
    "id": "pe07",
    "name_vi": "Bảy Tiền",
    "name_en": "7 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 7,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe07.jpg",
    "keywords_upright": [
      "kiên trì",
      "chiến lược",
      "giữ vững lập trường"
    ],
    "keywords_reversed": [
      "từ bỏ",
      "thiếu chiến lược",
      "bị áp đảo"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, kiên trì, đánh giá lại chiến lược và giữ vững lập trường trước thử thách.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, từ bỏ quá sớm, thiếu chiến lược rõ ràng hoặc bị áp đảo bởi khó khăn.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài đặt ra một thử thách mang tính nội tâm nhiều hơn ngoại cảnh - chức năng này được yêu cầu suy xét lại chiến lược, đối diện với hoài nghi hoặc ảo tưởng.)"
  },
  {
    "id": "pe08",
    "name_vi": "Tám Tiền",
    "name_en": "8 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 8,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe08.jpg",
    "keywords_upright": [
      "tiến triển nhanh",
      "tin tức mới",
      "hiệu quả"
    ],
    "keywords_reversed": [
      "trì trệ",
      "chậm trễ",
      "bế tắc"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, tiến triển nhanh chóng, tin tức mới hoặc giai đoạn bận rộn hiệu quả.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, trì trệ, tin tức bị trì hoãn hoặc cảm giác bế tắc không lối thoát.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài là giai đoạn vận động mạnh mẽ, chức năng này được đẩy tới hành động hoặc quyền lực cụ thể, tốc độ và cường độ tăng cao.)"
  },
  {
    "id": "pe09",
    "name_vi": "Chín Tiền",
    "name_en": "9 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 9,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe09.jpg",
    "keywords_upright": [
      "kiên cường",
      "cảnh giác",
      "gần đích"
    ],
    "keywords_reversed": [
      "kiệt sức",
      "hoang mang",
      "mất niềm tin"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, kiên cường, gần đạt được mục tiêu dù đã mệt mỏi và cần thận trọng.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, kiệt sức, hoang mang hoặc mất niềm tin ngay trước ngưỡng thành công.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài cho thấy sự gần đạt tới viên mãn của chu kỳ - chức năng này đã tích lũy đủ kinh nghiệm nhưng vẫn cần thêm sự kiên định trước khi hoàn tất.)"
  },
  {
    "id": "pe10",
    "name_vi": "Mười Tiền",
    "name_en": "10 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": 10,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pe10.jpg",
    "keywords_upright": [
      "hoàn thành chu kỳ",
      "gánh nặng",
      "trách nhiệm"
    ],
    "keywords_reversed": [
      "giải tỏa gánh nặng",
      "quá tải",
      "kiệt sức kéo dài"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, hoàn thành một chu kỳ, dù có thể đi kèm gánh nặng hoặc trách nhiệm lớn.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, giải phóng bớt gánh nặng, hoặc cảm giác quá tải kéo dài chưa được giải quyết.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Ở vị trí số này, lá bài đánh dấu sự hoàn tất một chu kỳ trọn vẹn của chức năng này, đồng thời mở ra ngưỡng cửa để bắt đầu một chu kỳ mới ở cấp độ cao hơn.)"
  },
  {
    "id": "pepa",
    "name_vi": "Trang Tiền",
    "name_en": "Page of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": null,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pepa.jpg",
    "keywords_upright": [
      "tò mò",
      "học hỏi",
      "tin tức mới"
    ],
    "keywords_reversed": [
      "thiếu chín chắn",
      "do dự",
      "tin đồn"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, một tin tức mới, sự tò mò và tinh thần học hỏi non trẻ trong lĩnh vực của chất bài này.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, tin tức chưa chắc chắn, sự thiếu chín chắn hoặc do dự trước điều mới mẻ.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Là quân bài chân dung, lá bài là hiện thân của một persona còn non trẻ đang học hỏi chức năng này - sự tò mò, ham học hỏi nhưng còn thiếu kinh nghiệm thực tế.)"
  },
  {
    "id": "pekn",
    "name_vi": "Hiệp Sĩ Tiền",
    "name_en": "Knight of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": null,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pekn.jpg",
    "keywords_upright": [
      "hành động",
      "nhiệt huyết",
      "theo đuổi mục tiêu"
    ],
    "keywords_reversed": [
      "bốc đồng",
      "cực đoan",
      "thiếu kiên nhẫn"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, hành động quyết liệt, theo đuổi mục tiêu với nhiệt huyết đặc trưng của chất bài này.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, hành động bốc đồng, thiếu kiên nhẫn hoặc theo đuổi một cách cực đoan.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Là quân bài chân dung, lá bài thể hiện chức năng này ở trạng thái cực đoan, bốc đồng, hướng ngoại mạnh mẽ - cái Tôi hành động theo bản năng nhiều hơn là cân nhắc.)"
  },
  {
    "id": "pequ",
    "name_vi": "Hoàng Hậu Tiền",
    "name_en": "Queen of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": null,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/pequ.jpg",
    "keywords_upright": [
      "trưởng thành",
      "thấu hiểu",
      "nuôi dưỡng nội tâm"
    ],
    "keywords_reversed": [
      "mất kết nối bản thân",
      "thái quá",
      "bất an nội tâm"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, sự trưởng thành, thấu hiểu sâu sắc và khả năng nuôi dưỡng năng lượng của chất bài này từ bên trong.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, mất kết nối với bản chất của chính mình, hoặc bộc lộ theo hướng thái quá, thiếu lành mạnh.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Là quân bài chân dung, lá bài thể hiện chức năng này đã được nội tâm hóa và làm chủ từ bên trong - biểu hiện chín chắn, tinh tế của nguyên mẫu Anima trong lĩnh vực này.)"
  },
  {
    "id": "peki",
    "name_vi": "Vua Tiền",
    "name_en": "King of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "suit_vi": "Tiền",
    "number": null,
    "element": "Đất",
    "astrology": null,
    "image": "assets/images/peki.jpg",
    "keywords_upright": [
      "làm chủ",
      "quyền lực vững vàng",
      "dẫn dắt"
    ],
    "keywords_reversed": [
      "độc đoán",
      "lạm quyền",
      "khô khan"
    ],
    "meaning_upright": "Về vật chất, tài chính và công việc, sự làm chủ, quyền lực vững vàng và khả năng dẫn dắt bằng kinh nghiệm trong lĩnh vực này.",
    "meaning_reversed": "Về vật chất, tài chính và công việc, lạm dụng quyền lực, độc đoán hoặc thiếu cảm xúc/khô khan khi thực thi quyền lực.",
    "love": "Sự ổn định, cam kết lâu dài và nền tảng vật chất cho tình cảm.",
    "career": "Tài chính, đầu tư dài hạn, xây dựng sự nghiệp bền vững.",
    "advice": "Kiên nhẫn xây dựng nền tảng vững chắc thay vì chạy theo kết quả nhanh.",
    "meaning_jung": "(Nghĩa theo trường phái Carl Jung: Theo tâm lý học Carl Jung, các lá Ẩn số Nhỏ được xem như biểu hiện của bốn chức năng tâm lý cơ bản; chất bài này (đất - thân thể và trải nghiệm vật chất cụ thể) tương ứng với chức năng Giác quan. Là quân bài chân dung, lá bài thể hiện chức năng này được làm chủ và biểu hiện ra bên ngoài với thẩm quyền - hình ảnh trưởng thành của nguyên mẫu Animus/Người Cha trong lĩnh vực này.)"
  }
];
