import React from "react";
import "../Style/support.css"
import { useState } from "react";

const Support = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i);
  }
  return (<body className="home">
    <div className="cover" >
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="question" onClick={()=>toggle(i)}>
              <h2>{item.question}</h2>
              <span>
                {selected === i? '-' : '+'}
              </span>
            </div>
            <div className={selected === i? 'answer show' : 'answer'}>{item.answer}</div>

          </div>
        ))}
      </div>
    </div>
  </body>
  )
};

const data = [
  {
   "question": "What do I do if my Steam Account is stolen? ",
   "answer": "If your Steam Account has been stolen or hijacked, you should complete the steps below before recovering your account to ensure the account is not stolen again."
  },
  {
   "question": "How do I get Steam Points?   ",
   "answer": "Whenever you make a purchase on Steam, you'll be given Steam Points based on how much you spend. First, we convert this amount to EGP, which then converts directly to the number of points you receive."
  },
  {
   "question": "I recently purchased a game that is now on sale. Can I refund the difference?   ",
   "answer": "We are unable to refund the difference in price; however, you may request a refund for the initial purchase and repurchase the game at the current sale price."
  },
  {
   "question": "Do I get an extra copy to gift if I own a game twice?   ",
   "answer": "Unless otherwise stated, you will not receive extra giftable copies for duplicate purchases on a single Steam account.   "
  },
  {
   "question": "Where did my Steam Wallet funds go?  ",
   "answer": "By default, Steam will always try to use your Steam Wallet funds first when a purchase is made. On the purchase confirmation screen, if you do not switch your intended payment method away from the Wallet, your Wallet funds will be spent. Check your purchase confirmation emails for all of your recent purchases for more information."
  }
 ]
export default Support;