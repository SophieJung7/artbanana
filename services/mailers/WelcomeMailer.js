const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../../config/keys');

class WelcomeMailer extends helper.Mail {
  constructor({ username }, content) {
    super();

    this.sgApi = sendgrid(keys.sendgridAPI);
    this.from_email = new helper.Email('cs@catsnap.co.kr');
    this.subject = '캣스냅 회원이 되주셔서 감사드립니다!';
    this.body = new helper.Content('text/html', content);
    this.recipients = new helper.Email(username);

    //This is just how Sendgrid works. You should define body like this.
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    const recipient = this.recipients;
    personalize.addTo(recipient);
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = WelcomeMailer;