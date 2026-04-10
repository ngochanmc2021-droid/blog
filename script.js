// Dữ liệu bộ bài và bài viết (Giữ nguyên của bạn)
const tarotDeck = [
    // ===== MAJOR ARCANA =====
    { id: 0, name: 'The Fool', vi: 'Chàng Khờ', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg', meaning: 'Đại diện cho sự khởi đầu mới, bước đi với niềm tin và sự ngây thơ. Bạn đang đứng trước một hành trình chưa biết trước, cần dám thử và chấp nhận rủi ro để phát triển.' },

    { id: 1, name: 'The Magician', vi: 'Nhà Ảo Thuật', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg', meaning: 'Bạn có đủ công cụ và khả năng để biến ý tưởng thành hiện thực. Đây là lúc tập trung, hành động và tận dụng tối đa năng lực cá nhân.' },

    { id: 2, name: 'The High Priestess', vi: 'Nữ Tư Tế', image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg', meaning: 'Lá bài của trực giác và tiềm thức. Bạn cần lắng nghe bản thân thay vì chỉ dựa vào logic, vì câu trả lời đã nằm sẵn bên trong.' },

    { id: 3, name: 'The Empress', vi: 'Nữ Hoàng', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg', meaning: 'Sự nuôi dưỡng, phát triển và trù phú. Đây là thời điểm thuận lợi cho sáng tạo, tình cảm và sự chăm sóc bản thân hoặc người khác.' },

    { id: 4, name: 'The Emperor', vi: 'Hoàng Đế', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg', meaning: 'Tượng trưng cho quyền lực, cấu trúc và kỷ luật. Bạn cần kiểm soát tình hình bằng lý trí và xây dựng nền tảng vững chắc.' },

    { id: 5, name: 'The Hierophant', vi: 'Thầy Tư Tế', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg', meaning: 'Liên quan đến truyền thống, quy tắc và học hỏi từ hệ thống có sẵn. Đây là lúc tuân theo chuẩn mực hoặc tìm người hướng dẫn.' },

    { id: 6, name: 'The Lovers', vi: 'Tình Nhân', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg', meaning: 'Không chỉ là tình yêu mà còn là sự lựa chọn quan trọng. Bạn cần đưa ra quyết định dựa trên giá trị thật của bản thân.' },

    { id: 7, name: 'The Chariot', vi: 'Chiến Xe', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg', meaning: 'Ý chí mạnh mẽ và sự quyết tâm sẽ giúp bạn vượt qua trở ngại. Thành công đến nếu bạn kiểm soát được hướng đi của mình.' },

    { id: 8, name: 'Strength', vi: 'Sức Mạnh', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg', meaning: 'Sức mạnh nội tâm, sự kiên nhẫn và kiểm soát cảm xúc. Đôi khi mềm mỏng lại hiệu quả hơn cứng rắn.' },

    { id: 9, name: 'The Hermit', vi: 'Ẩn Sĩ', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg', meaning: 'Thời gian cần thiết để suy ngẫm và tìm hướng đi. Bạn nên tạm rút lui để hiểu rõ bản thân hơn.' },

    { id: 10, name: 'Wheel of Fortune', vi: 'Vòng Quay', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg', meaning: 'Sự thay đổi mang tính chu kỳ. Có thể là cơ hội bất ngờ hoặc biến động không kiểm soát, bạn cần thích nghi.' },

    { id: 11, name: 'Justice', vi: 'Công Lý', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg', meaning: 'Sự công bằng và hậu quả. Mọi hành động đều có kết quả, bạn cần trung thực và chịu trách nhiệm.' },

    { id: 12, name: 'The Hanged Man', vi: 'Kẻ Treo', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg', meaning: 'Tạm dừng và nhìn vấn đề theo góc nhìn mới. Sự hy sinh hiện tại có thể mang lại lợi ích lâu dài.' },

    { id: 13, name: 'Death', vi: 'Cái Chết', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg', meaning: 'Kết thúc để bắt đầu mới. Đây là sự chuyển hóa mạnh mẽ, buộc bạn phải buông bỏ cái cũ.' },

    { id: 14, name: 'Temperance', vi: 'Tiết Độ', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg', meaning: 'Sự cân bằng và điều độ. Bạn cần kết hợp các yếu tố khác nhau một cách hài hòa để đạt kết quả tốt.' },

    { id: 15, name: 'The Devil', vi: 'Ác Quỷ', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg', meaning: 'Sự ràng buộc, cám dỗ hoặc thói quen xấu. Bạn đang bị mắc kẹt bởi chính lựa chọn của mình.' },

    { id: 16, name: 'The Tower', vi: 'Tòa Tháp', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg', meaning: 'Biến cố bất ngờ làm sụp đổ nền tảng cũ. Dù đau đớn, đây là cơ hội để xây dựng lại đúng đắn hơn.' },

    { id: 17, name: 'The Star', vi: 'Ngôi Sao', image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg', meaning: 'Hy vọng, chữa lành và niềm tin. Sau khó khăn, bạn đang dần tìm lại sự cân bằng và hướng đi tích cực.' },

    { id: 18, name: 'The Moon', vi: 'Mặt Trăng', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg', meaning: 'Sự mơ hồ, ảo tưởng hoặc lo lắng. Bạn cần phân biệt giữa thực tế và nỗi sợ trong đầu.' },

    { id: 19, name: 'The Sun', vi: 'Mặt Trời', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg', meaning: 'Thành công, niềm vui và năng lượng tích cực. Đây là giai đoạn thuận lợi, mọi thứ rõ ràng và phát triển tốt.' },

    { id: 20, name: 'Judgement', vi: 'Phán Xét', image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg', meaning: 'Sự thức tỉnh và nhìn lại quá khứ. Bạn đang đứng trước cơ hội thay đổi lớn nếu dám đối diện sự thật.' },

    { id: 21, name: 'The World', vi: 'Thế Giới', image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg', meaning: 'Sự hoàn thành và trọn vẹn. Một chu kỳ kết thúc thành công, mở ra giai đoạn mới.' },
    // ===== CUPS =====
    { id: 22, name: 'Ace of Cups', vi: 'Át Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg', meaning: 'Khởi đầu về cảm xúc, tình yêu hoặc sự kết nối mới. Đây là thời điểm bạn dễ mở lòng, đón nhận tình cảm và xây dựng mối quan hệ chân thành. Đồng thời cũng mang ý nghĩa chữa lành và cân bằng nội tâm.' },

    { id: 23, name: 'Two of Cups', vi: '2 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg', meaning: 'Sự hòa hợp và gắn kết giữa hai người. Lá bài này thường đại diện cho tình yêu, sự đồng điệu và mối quan hệ cân bằng dựa trên sự tôn trọng và thấu hiểu.' },

    { id: 24, name: 'Three of Cups', vi: '3 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg', meaning: 'Niềm vui, sự tụ họp và những khoảnh khắc đáng nhớ bên bạn bè. Đây là thời điểm tận hưởng cuộc sống và nhận được sự hỗ trợ từ các mối quan hệ xung quanh.' },

    { id: 25, name: 'Four of Cups', vi: '4 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg', meaning: 'Trạng thái chán nản, thiếu động lực hoặc không hài lòng với hiện tại. Bạn có thể đang bỏ lỡ cơ hội vì quá tập trung vào những điều chưa đạt được.' },

    { id: 26, name: 'Five of Cups', vi: '5 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg', meaning: 'Sự mất mát, tiếc nuối và thất vọng. Tuy nhiên, lá bài nhắc rằng vẫn còn cơ hội phía trước nếu bạn chịu buông bỏ quá khứ.' },

    { id: 27, name: 'Six of Cups', vi: '6 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg', meaning: 'Sự hoài niệm, ký ức và những cảm xúc trong sáng. Có thể liên quan đến người cũ, quá khứ hoặc những điều quen thuộc mang lại cảm giác an toàn.' },

    { id: 28, name: 'Seven of Cups', vi: '7 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg', meaning: 'Nhiều lựa chọn nhưng thiếu rõ ràng. Bạn có thể đang bị phân tâm hoặc mơ mộng quá mức, cần nhìn thực tế để đưa ra quyết định đúng.' },

    { id: 29, name: 'Eight of Cups', vi: '8 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg', meaning: 'Rời bỏ những điều không còn phù hợp để tìm kiếm giá trị sâu hơn. Đây là bước đi khó khăn nhưng cần thiết cho sự trưởng thành.' },

    { id: 30, name: 'Nine of Cups', vi: '9 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg', meaning: 'Sự hài lòng và mãn nguyện. Mong muốn của bạn có khả năng thành hiện thực, đặc biệt liên quan đến cảm xúc và đời sống cá nhân.' },

    { id: 31, name: 'Ten of Cups', vi: '10 Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg', meaning: 'Hạnh phúc trọn vẹn, gia đình hòa thuận và sự viên mãn về cảm xúc. Đây là trạng thái lý tưởng của tình yêu và cuộc sống.' },

    { id: 32, name: 'Page of Cups', vi: 'Tiểu Đồng Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg', meaning: 'Tin tức hoặc cơ hội liên quan đến tình cảm. Đây là năng lượng ngây thơ, sáng tạo và sẵn sàng khám phá cảm xúc mới.' },

    { id: 33, name: 'Knight of Cups', vi: 'Kỵ Sĩ Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg', meaning: 'Sự lãng mạn và theo đuổi cảm xúc. Bạn hoặc ai đó đang hành động theo trái tim, nhưng cần tránh quá mơ mộng hoặc thiếu thực tế.' },

    { id: 34, name: 'Queen of Cups', vi: 'Nữ Hoàng Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg', meaning: 'Sự nhạy cảm, trực giác mạnh và khả năng thấu hiểu người khác. Đây là người biết cân bằng cảm xúc và hỗ trợ người xung quanh.' },

    { id: 35, name: 'King of Cups', vi: 'Vua Cốc', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg', meaning: 'Sự trưởng thành trong cảm xúc và khả năng kiểm soát nội tâm. Người này biết giữ bình tĩnh và xử lý vấn đề một cách chín chắn.' },
    // ===== PENTACLES =====
    { id: 36, name: 'Ace of Pentacles', vi: 'Át Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg', meaning: 'Cơ hội mới liên quan đến tài chính, công việc hoặc đầu tư. Đây là nền tảng tốt để bắt đầu một kế hoạch lâu dài nếu bạn biết tận dụng đúng thời điểm.' },

    { id: 37, name: 'Two of Pentacles', vi: '2 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg', meaning: 'Bạn đang phải cân bằng nhiều trách nhiệm, đặc biệt là tài chính hoặc công việc. Sự linh hoạt là cần thiết nhưng cũng cần xác định ưu tiên rõ ràng.' },

    { id: 38, name: 'Three of Pentacles', vi: '3 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg', meaning: 'Sự hợp tác và làm việc nhóm mang lại hiệu quả cao. Thành công đến từ việc chia sẻ kỹ năng và phối hợp với người khác.' },

    { id: 39, name: 'Four of Pentacles', vi: '4 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg', meaning: 'Xu hướng giữ chặt tài sản hoặc cảm xúc. Bạn đang muốn bảo vệ những gì mình có, nhưng cũng cần tránh trở nên quá bảo thủ hoặc sợ thay đổi.' },

    { id: 40, name: 'Five of Pentacles', vi: '5 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg', meaning: 'Khó khăn tài chính hoặc cảm giác bị bỏ rơi. Tuy nhiên, sự giúp đỡ vẫn tồn tại nếu bạn chủ động tìm kiếm và không tự cô lập mình.' },

    { id: 41, name: 'Six of Pentacles', vi: '6 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg', meaning: 'Sự cân bằng giữa cho và nhận. Bạn có thể đang nhận được hỗ trợ hoặc cần chia sẻ với người khác để duy trì sự hài hòa.' },

    { id: 42, name: 'Seven of Pentacles', vi: '7 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg', meaning: 'Giai đoạn chờ đợi kết quả sau khi đã đầu tư công sức. Bạn cần kiên nhẫn và đánh giá lại hướng đi hiện tại.' },

    { id: 43, name: 'Eight of Pentacles', vi: '8 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg', meaning: 'Chăm chỉ, tập trung và không ngừng cải thiện kỹ năng. Thành công đến từ sự rèn luyện bền bỉ.' },

    { id: 44, name: 'Nine of Pentacles', vi: '9 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg', meaning: 'Sự độc lập tài chính và tận hưởng thành quả. Bạn đang ở trạng thái ổn định và có thể tự chủ cuộc sống.' },

    { id: 45, name: 'Ten of Pentacles', vi: '10 Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg', meaning: 'Sự ổn định lâu dài về tài chính và gia đình. Đây là thành quả bền vững, không chỉ cho bản thân mà còn cho thế hệ sau.' },

    { id: 46, name: 'Page of Pentacles', vi: 'Tiểu Đồng Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg', meaning: 'Cơ hội học hỏi hoặc bắt đầu một hướng đi mới liên quan đến tiền bạc hoặc kỹ năng. Bạn cần nghiêm túc và kiên trì.' },

    { id: 47, name: 'Knight of Pentacles', vi: 'Kỵ Sĩ Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg', meaning: 'Sự chăm chỉ và ổn định. Dù tiến chậm nhưng chắc, bạn đang xây dựng nền tảng vững chắc cho tương lai.' },

    { id: 48, name: 'Queen of Pentacles', vi: 'Nữ Hoàng Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg', meaning: 'Sự thực tế, chu đáo và khả năng chăm sóc. Bạn biết cách cân bằng giữa tài chính và đời sống cá nhân.' },

    { id: 49, name: 'King of Pentacles', vi: 'Vua Tiền', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg', meaning: 'Thành công về tài chính và sự ổn định lâu dài. Đây là hình mẫu của người có tầm nhìn và khả năng quản lý tốt.' },

    // ===== SWORDS =====
    { id: 50, name: 'Ace of Swords', vi: 'Át Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg', meaning: 'Sự thật được làm rõ và một khởi đầu dựa trên lý trí. Bạn cần đưa ra quyết định dứt khoát và rõ ràng.' },

    { id: 51, name: 'Two of Swords', vi: '2 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg', meaning: 'Sự do dự và né tránh quyết định. Bạn đang cố giữ cân bằng nhưng thực chất cần đối mặt với sự thật.' },

    { id: 52, name: 'Three of Swords', vi: '3 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg', meaning: 'Nỗi đau, sự tổn thương hoặc chia ly. Đây là trải nghiệm khó khăn nhưng cần thiết để bạn trưởng thành.' },

    { id: 53, name: 'Four of Swords', vi: '4 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg', meaning: 'Thời gian nghỉ ngơi và hồi phục. Bạn cần tạm dừng để lấy lại năng lượng trước khi tiếp tục.' },

    { id: 54, name: 'Five of Swords', vi: '5 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg', meaning: 'Xung đột và thắng thua. Bạn có thể đạt được chiến thắng nhưng phải trả giá về mối quan hệ.' },

    { id: 55, name: 'Six of Swords', vi: '6 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg', meaning: 'Sự chuyển tiếp sang giai đoạn tốt hơn. Bạn đang rời xa khó khăn để tìm sự ổn định.' },

    { id: 56, name: 'Seven of Swords', vi: '7 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg', meaning: 'Sự lừa dối hoặc hành động không minh bạch. Bạn hoặc người khác đang che giấu điều gì đó.' },

    { id: 57, name: 'Eight of Swords', vi: '8 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg', meaning: 'Cảm giác bị mắc kẹt và giới hạn. Thực tế, rào cản chủ yếu đến từ suy nghĩ của bạn.' },

    { id: 58, name: 'Nine of Swords', vi: '9 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg', meaning: 'Lo âu, căng thẳng và suy nghĩ tiêu cực. Bạn đang tự gây áp lực nhiều hơn thực tế.' },

    { id: 59, name: 'Ten of Swords', vi: '10 Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg', meaning: 'Kết thúc đau đớn nhưng cần thiết. Đây là đáy của vấn đề, sau đó sẽ là cơ hội bắt đầu lại.' },

    { id: 60, name: 'Page of Swords', vi: 'Tiểu Đồng Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg', meaning: 'Sự tò mò, quan sát và học hỏi. Bạn cần thu thập thông tin trước khi hành động.' },

    { id: 61, name: 'Knight of Swords', vi: 'Kỵ Sĩ Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg', meaning: 'Hành động nhanh và quyết đoán. Tuy nhiên, cần tránh vội vàng mà thiếu suy nghĩ.' },

    { id: 62, name: 'Queen of Swords', vi: 'Nữ Hoàng Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg', meaning: 'Sự sắc sảo và lý trí. Bạn cần nhìn nhận vấn đề một cách khách quan, không để cảm xúc chi phối.' },

    { id: 63, name: 'King of Swords', vi: 'Vua Kiếm', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg', meaning: 'Trí tuệ và quyền lực của lý trí. Đây là người có khả năng phân tích và đưa ra quyết định chính xác.' },

    // ===== WANDS =====
    { id: 64, name: 'Ace of Wands', vi: 'Át Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg', meaning: 'Nguồn năng lượng mới và động lực mạnh mẽ. Đây là thời điểm tốt để bắt đầu dự án hoặc theo đuổi đam mê.' },

    { id: 65, name: 'Two of Wands', vi: '2 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg', meaning: 'Lập kế hoạch và định hướng tương lai. Bạn đang cân nhắc bước đi tiếp theo và cần quyết định rõ ràng.' },

    { id: 66, name: 'Three of Wands', vi: '3 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg', meaning: 'Mở rộng và phát triển. Những nỗ lực trước đó bắt đầu mang lại cơ hội mới.' },

    { id: 67, name: 'Four of Wands', vi: '4 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg', meaning: 'Sự ổn định và ăn mừng thành quả. Đây là giai đoạn bình yên và đáng tận hưởng.' },

    { id: 68, name: 'Five of Wands', vi: '5 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg', meaning: 'Cạnh tranh và xung đột nhỏ. Đây là thử thách giúp bạn phát triển nếu biết tận dụng.' },

    { id: 69, name: 'Six of Wands', vi: '6 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg', meaning: 'Chiến thắng và được công nhận. Bạn đang đạt được thành quả xứng đáng với nỗ lực.' },

    { id: 70, name: 'Seven of Wands', vi: '7 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg', meaning: 'Bảo vệ quan điểm và vị trí của mình. Bạn cần kiên định trước sự cạnh tranh.' },

    { id: 71, name: 'Eight of Wands', vi: '8 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg', meaning: 'Tiến triển nhanh chóng và thay đổi bất ngờ. Mọi thứ đang diễn ra với tốc độ cao.' },

    { id: 72, name: 'Nine of Wands', vi: '9 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Wands09.jpg', meaning: 'Sự kiên trì và phòng thủ. Bạn đã gần đạt mục tiêu nhưng cần tiếp tục cố gắng.' },

    { id: 73, name: 'Ten of Wands', vi: '10 Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg', meaning: 'Gánh nặng và áp lực. Bạn đang ôm quá nhiều trách nhiệm và cần học cách buông bớt.' },

    { id: 74, name: 'Page of Wands', vi: 'Tiểu Đồng Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg', meaning: 'Tinh thần khám phá và nhiệt huyết. Đây là khởi đầu của ý tưởng mới hoặc hành trình mới.' },

    { id: 75, name: 'Knight of Wands', vi: 'Kỵ Sĩ Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg', meaning: 'Hành động nhanh, đam mê và bốc đồng. Bạn cần kiểm soát năng lượng để tránh sai lầm.' },

    { id: 76, name: 'Queen of Wands', vi: 'Nữ Hoàng Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg', meaning: 'Sự tự tin, cuốn hút và độc lập. Bạn có khả năng truyền cảm hứng cho người khác.' },

    { id: 77, name: 'King of Wands', vi: 'Vua Gậy', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg', meaning: 'Tầm nhìn và khả năng lãnh đạo. Bạn biết cách biến ý tưởng thành hành động và dẫn dắt người khác.' }
];
const articlesData = [
    {
        id: 1,
        title: "Hành trình của The Fool: Bắt đầu từ con số 0",
        date: "25/03/2026",
        author: "Tarot Reader",
        summary: "Lá bài The Fool đại diện cho những khởi đầu mới, sự ngây thơ và tinh thần phiêu lưu...",
        content: `
            <p>The Fool là lá bài số 0 trong bộ Ẩn Chính, tượng trưng cho một linh hồn thuần khiết bắt đầu bước vào thế gian. Anh ta mang theo một chiếc túi nhỏ, ánh mắt hướng về phía bầu trời mà không màng đến vực thẳm dưới chân.</p>
            <p><b>Ý nghĩa chính:</b> Sự tự do, niềm tin mù quáng và sự liều lĩnh cần thiết để bắt đầu một chương mới trong cuộc đời. Khi lá bài này xuất hiện, vũ trụ đang nhắn nhủ bạn hãy cứ bước đi, ngay cả khi bạn chưa có một kế hoạch hoàn hảo.</p>
            <p>Đừng sợ hãi những sai lầm, vì chính những bước chân "khờ dại" đó sẽ dạy cho bạn những bài học quý giá nhất.</p>
        `
    },
    {
        id: 2,
        title: "Cách trải bài Tarot 3 lá cho người mới bắt đầu",
        date: "20/03/2026",
        author: "Tarot Reader",
        summary: "Trải bài 3 lá Quá khứ - Hiện tại - Tương lai là một trong những cách đọc bài cơ bản và hiệu quả nhất...",
        content: `
            <p>Trải bài 3 lá là kỹ thuật nhập môn mà bất kỳ ai cũng nên biết. Nó đơn giản nhưng lại bao quát được toàn bộ dòng chảy của năng lượng.</p>
            <ul>
                <li><b>Lá 1:</b> Quá khứ - Những gì đã dẫn dắt bạn đến tình huống hiện tại.</li>
                <li><b>Lá 2:</b> Hiện tại - Trạng thái thực tế và những gì bạn đang đối mặt.</li>
                <li><b>Lá 3:</b> Tương lai - Kết quả tiềm năng nếu bạn tiếp tục con đường này.</li>
            </ul>
            <p>Hãy nhớ hít thở sâu và tập trung vào câu hỏi trước khi rút bài để có được kết quả chính xác nhất nhé!</p>
        `
    }
];

// Nạp danh sách bài viết
function renderArticles() {
    const articleList = document.getElementById('article-list');
    articleList.innerHTML = '';
    articlesData.forEach(art => {
        articleList.innerHTML += `
            <div class="card-item-box animate__animated animate__fadeInUp">
                <h3>${art.title}</h3>
                <p style="font-size:0.85rem; color:#aaa;">Ngày: ${art.date}</p>
                <p style="margin: 10px 0;">${art.summary}</p>
                <button class="btn-read" onclick="viewArticle(${art.id})">Đọc tiếp →</button>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', renderArticles);

// Xử lý Modal Bài Viết Chi Tiết
function viewArticle(id) {
    const article = articlesData.find(a => a.id === id);
    const detailContent = document.getElementById('detail-content');
    const modal = document.getElementById('article-modal');
    
    detailContent.innerHTML = `
        <h2>${article.title}</h2>
        <div class="meta-data">Đăng ngày: ${article.date} | Tác giả: ${article.author}</div>
        <div class="article-body">${article.content}</div>
    `;
    modal.style.display = 'block';
}

function closeArticleModal() {
    document.getElementById('article-modal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('article-modal');
    if (event.target == modal) { modal.style.display = "none"; }
}

// Chuyển hướng bằng Scroll (Cuộn mượt)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const y = section.getBoundingClientRect().top + window.pageYOffset - 80; // Trừ đi chiều cao header
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Xử lý đổi màu Menu khi cuộn tới phần tương ứng
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-target') === current) {
            a.classList.add('active');
        }
    });
});

// Rút 1 lá nhanh
function drawQuickCard() {
    const resultArea = document.getElementById('quick-result');
    const decorImg = document.getElementById('quick-decor');
    
    // Ẩn ảnh 123.png đi để nhường chỗ cho bài rút ra
    if (decorImg) decorImg.style.display = 'none';

    resultArea.innerHTML = `
        <div class="shuffling-container">
            <div class="fake-card"></div>
            <div class="fake-card"></div>
            <div class="fake-card"></div>
        </div>
        <p style="color:var(--gold); font-style: italic; margin-top: 15px;">Vũ trụ đang gửi thông điệp đến bạn...</p>
    `;

    setTimeout(() => {
        const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
        resultArea.innerHTML = `
            <div class="tarot-card animate__animated animate__zoomIn" style="margin: 0 auto;">
                <img src="${randomCard.image}" alt="${randomCard.name}">
                <h3 style="color: var(--gold); margin: 10px 0;">${randomCard.vi}</h3>
                <p style="font-size: 0.9rem; text-align: justify;">${randomCard.meaning}</p>
            </div>
        `;
    }, 1500);
}

// Rút 3 lá
function drawSpread(topic) {
    const spreadArea = document.getElementById('spread-result');
    const decorImg = document.getElementById('spread-decor');
    
    // Ẩn ảnh 123.png đi khi bắt đầu rút
    if (decorImg) decorImg.style.display = 'none';

    spreadArea.innerHTML = `
        <div class="shuffling-container">
            <div class="fake-card"></div>
            <div class="fake-card"></div>
            <div class="fake-card"></div>
        </div>
        <p style="color:var(--gold); font-style: italic;">Đang kết nối năng lượng cho vấn đề: ${topic}...</p>
    `;

    setTimeout(() => {
        let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
        let selectedCards = shuffled.slice(0, 3);
        
        spreadArea.innerHTML = `
            <div style="margin-bottom:25px;">
                <h3 style="color:var(--gold); font-size: 1.5rem;">🔮 ${topic} 🔮</h3>
            </div>
            <div class="result-grid"></div>
        `;
        
        const grid = spreadArea.querySelector('.result-grid');
        const labels = ['Quá khứ', 'Hiện tại', 'Tương lai'];
        
        selectedCards.forEach((card, index) => {
            grid.innerHTML += `
                <div class="tarot-card animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.2}s">
                    <p style="color:#aaa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;"><small>${labels[index]}</small></p>
                    <img src="${card.image}" alt="${card.name}">
                    <h4 style="color:var(--gold); margin-top:15px; font-size: 1.2rem;">${card.vi}</h4>
                    <p style="margin-top:10px; font-size: 0.85rem; color: #ddd; text-align: justify;">${card.meaning}</p>
                </div>
            `;
        });
        
        // Cuộn màn hình nhẹ xuống kết quả
        window.scrollBy({ top: 300, behavior: 'smooth' });
    }, 1500);
}
