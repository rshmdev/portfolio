import emailjs from '@emailjs/browser';

// Configurações do EmailJS
// Você precisará criar uma conta gratuita em https://www.emailjs.com/
// e configurar um serviço de email (Gmail, Outlook, etc.)
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_kvew5so', // Substitua pelo seu Service ID
  TEMPLATE_ID: 'template_hhe3btq', // Substitua pelo seu Template ID
  PUBLIC_KEY: 'Cwlmu7XpD7MbEjvpM', // Substitua pela sua Public Key
};

// Inicializar EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Função para enviar email
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Rian Moraes', // Seu nome
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Email enviado com sucesso!',
      response,
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Erro ao enviar email. Tente novamente.',
      error,
    };
  }
};