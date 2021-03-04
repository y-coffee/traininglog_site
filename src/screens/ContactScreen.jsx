import React, { useState } from 'react';
import { string } from 'prop-types';
import firebase from 'firebase/app';
import db from '../firebase';

import Footer from '../components/Footer';
import NavigationBarContact from '../components/NavigationBarContact';

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

  return (
    <>
      <NavigationBarContact
        navTitle1="TOP"
        navTitle2="TrainingMenu"
        navTitle3="App"
      />
      <div style={{ backgroundImage: `url(${joo})`, height: 1300 }} className="area10x3View">
        <div
          className="container"
          style={{
            height: 830,
          }}
        >
          <div className="subTitleBox">
            <h2>お問い合わせ</h2>
          </div>
          <div>
            <p style={{ color: '#ffffff', fontSize: 18 }}>当Webサイトをご利用頂きありがとうございます。</p>
            <p style={{ color: '#ffffff', fontSize: 18 }}>トレーニングメニューやサプリメントそしてアプリについてのお問い合わせは以下のフォームからお願いいたします。また、当Webサイトに追加希望のトピックなどのご連絡もお待ちしております。</p>
            <p style={{ color: '#ffffff', fontSize: 18 }}>良いトレーニングライフを！</p>
          </div>
          <br />
          <br />
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor={nameID}>
                <b style={{ color: '#ffffff', fontSize: 23 }}>
                  お名前
                  <span style={{ color: '#F0AC19' }}>(必須)</span>
                </b>
                <br />
                <input
                  placeholder="ニックネーム可"
                  id={nameID}
                  style={{
                    width: '60%', height: 30, lineHeight: 30, fontSize: 15,
                  }}
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
                <b style={{ color: '#ffffff', fontSize: 23 }}>
                  ご連絡先
                  <span style={{ color: '#F0AC19' }}>(必須)</span>
                </b>
                <br />
                <input
                  placeholder="hogehoge@example.com"
                  id={mailID}
                  style={{
                    width: '60%', height: 30, lineHeight: 30, fontSize: 15,
                  }}
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
                <b style={{ color: '#ffffff', fontSize: 23 }}>
                  お問い合わせ内容
                  <span style={{ color: '#F0AC19' }}>(必須)</span>
                </b>
                <br />
                <textarea
                  placeholder="メッセージ"
                  id={messageID}
                  style={{
                    maxWidth: '100%', width: '100%', height: 350, lineHeight: 1.5, fontSize: 15, whiteSpace: 'pre-wrap',
                  }}
                  type="text"
                  value={message}
                  onChange={(event) => { setMessage(event.target.value); }}
                />
              </label>
            </div>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        />
      </div>
    </>
  );
}
