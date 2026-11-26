import Layout from "../../layout/Layout.jsx";

function Contact() {
  return (
    <Layout>

      <h1>📞 Contact Us</h1>

      <div className="card">

        <input placeholder="Name" />
        <br /><br />

        <input placeholder="Email" />
        <br /><br />

        <textarea placeholder="Message"></textarea>
        <br /><br />

        <button className="btn">Send</button>

      </div>

    </Layout>
  );
}

export default Contact;