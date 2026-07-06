// netlify/functions/webhook-infinitepay.js
// Recebe a notificação da InfinitePay quando um pagamento é aprovado.
// Serve como registro/log — a liberação principal do PDF acontece via obrigado.html

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // Loga a venda (aparece nos "Function logs" do Netlify)
    console.log('✅ Venda confirmada via webhook:', {
      order_nsu: data.order_nsu,
      transaction_nsu: data.transaction_nsu,
      amount: data.paid_amount,
      method: data.capture_method,
      receipt: data.receipt_url
    });

    // Responde rápido com 200 OK, como a documentação pede
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    };
  } catch (err) {
    console.error('Erro ao processar webhook:', err);
    // Mesmo com erro, respondemos 200 para não gerar reenvios desnecessários
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true, note: 'error logged' })
    };
  }
};
