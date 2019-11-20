const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer')

exports.sendEmail = functions.firestore.document('orders/{orderId}').onCreate((snap, context) => {
  let mailOptions
  if (snap.data().content === 'เปิดสาขา') {
    mailOptions = {
      from: '59010539@kmitl.ac.th',
      to: snap.data().email,
      subject: snap.data().content,
      html: `<h1>${snap.data().content} ${snap.data().branchName}</h1>
                <p>
                    <h3><b>ธุรกิจ: </b>${snap.data().business}</h3>
                    <h3><b>ชื่อสาขา: </b>${snap.data().branchName}</h3>
                    <h3><b>เลข Cost center: </b>${snap.data().Cost}</h3>
                    <h3><b>ผู้จัดการเขต: </b>${snap.data().name}</h3>
                    <a href="http://localhost:3000/accountmanage"><button>ตรวจสอบเอกสาร</button></a>
                </p>`
    }
  }else if (snap.data().content === 'เปิด Cost center') {
    mailOptions = {
      from: '59010539@kmitl.ac.th',
      to: snap.data().email,
      subject: snap.data().content,
      html: `<h1>${snap.data().content} ${snap.data().branchName}</h1>
                <p>
                    <h3><b>ธุรกิจ: </b>${snap.data().business}</h3>
                    <h3><b>ชื่อสาขา: </b>${snap.data().branchName}</h3>
                    <h3><b>เลข Cost center: </b>${snap.data().Cost}</h3>
                    <h3><b>ผู้จัดการเขต: </b>${snap.data().name}</h3>
                    <a href="http://localhost:3000/costcenter/${snap.data().branchId}"><button>ดาว์นโหลดเอกสาร</button></a>
                </p>`
    }
  }else if (snap.data().content === 'ทำประกันสาขาใหม่') {
    mailOptions = {
      from: '59010539@kmitl.ac.th',
      to: snap.data().email,
      subject: snap.data().content,
      html: `<h1>${snap.data().content} ${snap.data().branchName}</h1>
                <p>
                    <h3><b>ธุรกิจ: </b>${snap.data().business}</h3>
                    <h3><b>ชื่อสาขา: </b>${snap.data().branchName}</h3>
                    <h3><b>เลข Cost center: </b>${snap.data().Cost}</h3>
                    <h3><b>ผู้จัดการเขต: </b>${snap.data().name}</h3>
                    <a href="http://localhost:3000"><button>ตรวจสอบเอกสาร</button></a>
                </p>`
    }
  }else if ( snap.data().content === 'เบิกโทรศัพท์') {
    mailOptions = {
      from: '59010539@kmitl.ac.th',
      to: snap.data().email,
      subject: snap.data().content,
      html: `<h1>${snap.data().content} ${snap.data().branchName}</h1>
                <p>
                    <h3><b>ธุรกิจ: </b>${snap.data().business}</h3>
                    <h3><b>ชื่อสาขา: </b>${snap.data().branchName}</h3>
                    <h3><b>เลข Cost center: </b>${snap.data().Cost}</h3>
                    <h3><b>ผู้จัดการเขต: </b>${snap.data().name}</h3>
                    <a href="http://localhost:3000/doctel/check/${snap.data().branchId}"><button>อนุมัติเอกสาร</button></a>
                </p>`
    }
  }else if ( snap.data().content === 'เบิกโทรศัพท์ บท.') {
    mailOptions = {
      from: '59010539@kmitl.ac.th',
      to: snap.data().email,
      subject: snap.data().content,
      html: `<h1>${snap.data().content} ${snap.data().branchName}</h1>
                <p>
                    <h3><b>ธุรกิจ: </b>${snap.data().business}</h3>
                    <h3><b>ชื่อสาขา: </b>${snap.data().branchName}</h3>
                    <h3><b>เลข Cost center: </b>${snap.data().Cost}</h3>
                    <h3><b>ผู้จัดการเขต: </b>${snap.data().name}</h3>
                    <a href="http://localhost:3000/doctel/download/${snap.data().branchId}"><button>อนุมัติเอกสาร</button></a>
                </p>`
    }
  }

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: '',
      pass: ''
    }
  })

  return transporter.sendMail(mailOptions, (error, data) => {
    if(error){
      console.log(error)
      return
    }
    console.log("Sent!")
  })
})

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

exports.projectCreacted = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore().collection('users').doc(user.uid).get().then( doc => {
      const newUser = doc.data()
      const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
      }
      return createNotification(notification)
  })
});

exports.openBranch = functions.firestore.document("branchs/{branchId}").onCreate(doc => {
  const branch = doc.data()
  const notification = {
    content: 'Open new branch',
    user: `${branch.Users.UserName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notification)
})

exports.deleteBranch = functions.firestore.document("close/{close}").onCreate(doc => {
  const branch = doc.data()
  const notification = {
    content: 'is Close',
    user: `${branch.business}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }
  return createNotification(notification)
})