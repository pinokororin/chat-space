$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image? `<img src= ${ message.image } >` : "";
    var html = `<div class="message">
                    <div class="message__upper-info">
                      <p class="message__upper-info__talker">
                      ${message.user_name}
                      </p>
                      <p class="message__upper-info__date">
                      ${message.date}
                      </p>
                    </div>
                    <div class="message__text">
                      <p class="lower-message__content">
                      ${content}
                      </p>
                      ${img}
                    </div>
                  </div>`
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .always(function() {
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});