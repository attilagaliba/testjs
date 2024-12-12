function updateWalletAndPercentage() {
  // Dolar değerini içeren elementi seç
  const priceElement = document.querySelector('div[kind="headline/h3"].BreakWordText-sc-1s64evs-0');
  if (!priceElement) {
    console.error("Dolar değeri elementi bulunamadı.");
    return;
  }

  // Tüm span'leri seç ve içindeki metni birleştir
  const spans = priceElement.querySelectorAll('span');
  const priceText = Array.from(spans).map(span => span.textContent).join('');

  console.log("Alınan fiyat metni:", priceText); // Debug için fiyatı konsola yazdır

  // $ sembolünü kaldır, virgülleri kaldır ve sayıya çevir
  const normalizedPriceText = priceText.replace('$', '').replace(/,/g, '');
  const price = parseFloat(normalizedPriceText);

  if (isNaN(price)) {
    console.error("Dolar değeri sayıya çevrilemedi:", normalizedPriceText);
    return;
  }

  // Kur ile çarp
  const exchangeRate = 34.75;
  const totalTL = price * exchangeRate;

  // Binlik ayraçlar ile formatla
  const formattedTL = new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalTL);

  // Button içindeki yüzde değerini güncelle
  const percentageElement = document.querySelector('button div.UIText-sc-96tl0y-0.ccvHYC');
  if (percentageElement) {
    percentageElement.textContent = `${formattedTL} TL`;
    console.log("Yüzde elementi güncellendi:", formattedTL + " TL"); // Debug için sonucu yazdır
  } else {
    console.error("Yüzde elementi bulunamadı.");
  }
}

// Her 1 saniyede bir işlemi gerçekleştir
setInterval(updateWalletAndPercentage, 1000);


function updateWalletButton() {
  // Dolar değerini içeren elementi seç
  const priceElement = document.querySelector('div[kind="headline/hero"]');
  if (!priceElement) {
    console.error("Dolar değeri elementi bulunamadı.");
    return;
  }

  // Tüm span'leri seç ve içindeki metni birleştir
  const spans = priceElement.querySelectorAll('span');
  const priceText = Array.from(spans).map(span => span.textContent).join('');

  console.log("Alınan fiyat metni:", priceText); // Debug için fiyatı konsola yazdır

  // $ sembolünü kaldır, virgülleri kaldır ve sayıya çevir
  const normalizedPriceText = priceText.replace('$', '').replace(/,/g, '');
  const price = parseFloat(normalizedPriceText);

  if (isNaN(price)) {
    console.error("Dolar değeri sayıya çevrilemedi:", normalizedPriceText);
    return;
  }

  // Kur ile çarp
  const exchangeRate = 34.75;
  const totalTL = price * exchangeRate;

  // Binlik ayraçlar ile formatla
  const formattedTL = new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalTL);

  // <h1> etiketini seç ve yazısını değiştir
  const nameElement = document.querySelector('h1.UIText-sc-96tl0y-0.ebJvhr');
  if (nameElement) {
    nameElement.textContent = `${formattedTL} TL`;
    console.log("İsim elementi güncellendi:", formattedTL + " TL"); // Debug için sonucu yazdır
  } else {
    console.error("İsim elementi bulunamadı.");
  }
}

// Her 1 saniyede bir işlemi gerçekleştir
setInterval(updateWalletButton, 1000);

