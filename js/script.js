function calculate() {
    let senka = parseInt(document.getElementById('currentSenka').value);
    let count = parseInt(document.getElementById('startBox').value);
    const box1_4 = 2200;
    const box5_45 = 2000;
    const box46_80 = 10000;
    const box81 = 15000;

    const count2 = count;
    const originalSenka = senka;

    while (count <= 4) {
        senka -= box1_4;
        if (senka < 0) {
            senka += box1_4;  // 마지막으로 뺀 값을 다시 더해줌
            break;
        }
        count++;
    }

    while (count > 4 && count <= 45) {
        senka -= box5_45;
        if (senka < 0) {
            senka += box5_45;  // 마지막으로 뺀 값을 다시 더해줌
            break;
        }
        count++;
    }

    while (count > 45 && count <= 80) {
        senka -= box46_80;
        if (senka < 0) {
            senka += box46_80;  // 마지막으로 뺀 값을 다시 더해줌
            break;
        }
        count++;
    }

    while (count > 80) {
        senka -= box81;
        if (senka < 0) {
            senka += box81;  // 마지막으로 뺀 값을 다시 더해줌
            break;
        }
        count++;
    }

    const count3 = count - count2;

    let resultHTML = `<p>개봉 박스 수: ${count3}</p>`;
    resultHTML += `<p>도달한 박스 번호: ${count-1}</p>`;
    resultHTML += `<p>사용한 전화의 개수: ${originalSenka - senka}</p>`;
    resultHTML += `<p>개봉 후 남은 전화의 개수: ${senka}</p>`;

    document.getElementById('result').innerHTML = resultHTML;
}