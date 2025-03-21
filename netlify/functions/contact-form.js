exports.handler = async function(event, context) {
  // 只接受 POST 請求
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 解析表單數據
    const payload = JSON.parse(event.body);
    const { name, email, message } = payload;
    
    // 這裡可以添加發送電子郵件或保存到數據庫的代碼
    console.log(`收到來自 ${name} (${email}) 的消息: ${message}`);

    // 返回成功響應
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "表單提交成功！" })
    };
  } catch (error) {
    // 返回錯誤響應
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "表單提交失敗", error: error.message })
    };
  }
}
