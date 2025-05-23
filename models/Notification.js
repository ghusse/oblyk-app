import ActiveData from '@/models/ActiveData'
import User from '@/models/User'
import ConversationMessage from '@/models/ConversationMessage'
import Like from '~/models/Like'
import Comment from '~/models/Comment'

export default class Notification extends ActiveData {
  toJSON () {
    return this._buildJsonObject(Notification)
  }

  get className () {
    return 'Notification'
  }

  get Notifiable () {
    if (this.notifiable_type === 'User') { return new User({ attributes: this.notifiable_object }) }
    if (this.notifiable_type === 'ConversationMessage') { return new ConversationMessage({ attributes: this.notifiable_object }) }
    if (this.notifiable_type === 'Like') { return new Like({ attributes: this.notifiable_object }) }
    if (this.notifiable_type === 'Comment') { return new Comment({ attributes: this.notifiable_object }) }
  }

  get Parent () {
    if (['ConversationMessage', 'Like', 'Comment'].includes(this.notifiable_type)) { return new User({ attributes: this.parent_object }) }
  }

  get attachmentImage () {
    if (this.notifiable_type === 'ConversationMessage') { return this.Parent.attachments.avatar }
    if (this.notifiable_type === 'Like') { return this.Parent.attachments.avatar }
    if (this.notifiable_type === 'Comment') { return this.Parent.attachments.avatar }
    if (this.notifiable_type === 'User') { return this.Notifiable.attachments.avatar }
  }
}
