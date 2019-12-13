json.content  @message.content
json.image  @message.image.url
json.user_id  @message.user.id
json.date @message.created_at.to_s
json.user_name @message.user.name