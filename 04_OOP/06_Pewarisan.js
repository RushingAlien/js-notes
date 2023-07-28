//Perhatikan dua kelas redundan ini
class WhatsAppServicee {
    constructor(sender) {
    this.sender = sender;
    }
    
    sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    
    sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
        this.sendMessage(message, receiver);
    }
    }
}
    
class EmailServicee {
    constructor(sender) {
    this.sender = sender;
    }
    
    sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    
    sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
        this.sendMessage(message, receiver);
    }, delay);
    }
}


// SOLUSI

// Superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }
    
    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
 
// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
//whatsapp.sendDelayedMessage(); // Error
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
//email.sendBroadcastMessage(); // Error



//Tanpa sintaks ES6
function MailServicee(sender) {
  this.sender = sender;
}
 
MailServicee.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
}
 
function WhatsAppServiceee(sender) {
  MailServicee.call(this, sender);
}
 
// Prototype inheritance
WhatsAppServiceee.prototype = Object.create(MailServicee.prototype);
WhatsAppServiceee.prototype.constructor = WhatsAppServiceee;
 
WhatsAppServiceee.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
}
 
function EmailServiceee(sender) {
  MailServicee.call(this, sender);
}
 
// Prototype inheritance
EmailServiceee.prototype = Object.create(MailService.prototype);
EmailServiceee.prototype.constructor = EmailServiceee;
 
EmailServiceee.prototype.sendDelayedMessage = function (message, receiver, delay) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
}
 
const whatsappp = new WhatsAppServiceee('+6281234567890');
const emaill = new EmailServiceee('dimas@dicoding.com');
whatsappp.sendMessage('Hello', '+6289876543210');
whatsappp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
emaill.sendMessage('Hello', 'john@doe.com');
emaill.sendDelayedMessage('Hello', 'john@doe.com', 3000);


//instanceof
     
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true
 
console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true