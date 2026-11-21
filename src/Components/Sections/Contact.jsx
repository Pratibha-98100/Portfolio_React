import React, { useRef, useState } from "react";
import styled from "styled-components";
import EarthCanvas from "../Canvas/Earth";

// FormSubmit forwards every message to this inbox (no password or server needed).
// FormSubmit forwards every message to Gmail. The ID below is its private
// alias for pratibha98100@gmail.com (keeps the address hidden).
const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/96f7040f9a2531d83fd6b9440512b8b0";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 4px;
    margin: 12px auto 0;
    border-radius: 4px;
    background: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;
  max-width: 640px;
  padding: 0 16px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 32px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(91, 43, 214, 0.25);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 600;
`;

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form.current));
    if (data._honey) return; // bot filled the hidden field
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: `[Portfolio] ${data.subject}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || String(result.success) !== "true") {
        throw new Error(result.message || "Something went wrong.");
      }
      alert("Message sent! I'll get back to you soon.");
      form.current.reset();
    } catch (err) {
      alert(`Sorry, the message could not be sent. ${err.message}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput type="email" placeholder="Your Email" name="email" required />
          <ContactInput placeholder="Your Name" name="name" required />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" rows={4} required />
          <ContactButton
            type="submit"
            value={sending ? "Sending..." : "Send"}
            disabled={sending}
          />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;