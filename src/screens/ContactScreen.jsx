import React, { useState } from 'react';
import { string } from 'prop-types';
import DehazeIcon from '@material-ui/icons/Dehaze';
import firebase from 'firebase/app';
import db from '../firebase';

import Footer from '../components/Footer';
import NavigationBarContact from '../components/NavigationBarContact';
import Humberger from '../components/HumbergerScreen';

import joo from '../assets/Background_program_top.png';

export default function ContactScreen() {
  const { nameID, mailID, messageID } = string;

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    db.collection('contacts')
      .add({
        name,
        mail,
        message,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert('お問い合わせが完了しました。'); // eslint-disable-line no-alert
      })
      .catch(() => {
      });
    setName('');
    setMail('');
    setMessage('');
  };

  const [open, setOpen] = useState(false);
  const humberger = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavigationBarContact
        navTitle1="TOP"
        navTitle2="TrainingMenu"
        navTitle3="App"
        className="navPhone"
      />
      <div className="navPC">
        <Humberger koko={`${open ? 'IsBlue' : ''}`} navTitlePhone1="TOP" navTitlePhone2="Training" navTitlePhone3="Supplement" navTitlePhone4="App" link1="/" link2="trainingMenu" link3="supplement" link4="tremenuApp" />
      </div>
      <div className="humbergerBox">
        <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
      </div>

      <div style={{ backgroundImage: `url(${joo})`, height: 1300 }} className="areaContactView">
        <div
          className="container"
          style={{
            height: 830,
          }}
        >
          <div className="subTitleBox">
            <h2>お問い合わせ</h2>
          </div>
          <div className="contactDesctiptionBox">
            <p className="contactDesctiption">当Webサイトをご利用頂きありがとうございます。</p>
            <p className="contactDesctiption">トレーニングメニューやサプリメントそしてアプリについてのお問い合わせは以下のフォームからお願いいたします。また、当Webサイトに追加希望のトピックなどのご連絡もお待ちしております。</p>
            <p className="contactDesctiption">良いトレーニングライフを！</p>
          </div>
          <br />
          <br />
          <form onSubmit={onSubmit} className="contactForm">
            <div className="contactFormBox">
              <label htmlFor={nameID}>
                <b className="bLabel">
                  お名前
                  <span className="spanLabel">(必須)</span>
                </b>
                <br />
                <input
                  placeholder="ニックネーム可"
                  id={nameID}
                  className="nameInput"
                  type="text"
                  value={name}
                  onChange={(event) => { setName(event.target.value); }}
                />
              </label>
            </div>
            <br />
            <br />
            <div>
              <label htmlFor={mailID}>
                <b className="bLabel">
                  ご連絡先
                  <span className="spanLabel">(必須)</span>
                </b>
                <br />
                <input
                  placeholder="hogehoge@example.com"
                  id={mailID}
                  className="adressInput"
                  type="text"
                  value={mail}
                  onChange={(event) => { setMail(event.target.value); }}
                />
              </label>
            </div>
            <br />
            <br />
            <div>
              <label htmlFor={messageID}>
                <b className="bLabel">
                  お問い合わせ内容
                  <span className="spanLabel">(必須)</span>
                </b>
                <br />
                <textarea
                  placeholder="メッセージ"
                  id={messageID}
                  type="text"
                  value={message}
                  className="textarea"
                  onChange={(event) => { setMessage(event.target.value); }}
                />
              </label>
            </div>
            <br />
            <br />
            <div className="contactButtonBox">
              <button
                type="submit"
                style={{
                  backgroundColor: '#F0AC19', border: 0, width: 150, height: 50, fontSize: 20, fontWeight: 'bold', color: '#ffffff', borderRadius: 10,
                }}
              >
                送信
              </button>
            </div>
          </form>
        </div>
        <Footer
          style={{
            color: '#ffffff',
            marginTop: 420,
          }}
          sortOf="footerPhoneContact"
        />
      </div>
    </>
  );
}
