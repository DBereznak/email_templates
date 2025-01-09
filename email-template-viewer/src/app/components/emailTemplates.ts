
export default function emailMarkup(name: string, title: string, body: string) {
    return [
      {
        id: 1,
        email: `<table style='width: 640px; background-color: #fff; min-height: 500px; border-collapse: collapse;'><tr style="height: 100px; background-color: #7e827f;"><th style="padding: 20px; text-align: left;"><h3>${title}</h3></th></tr><tr><td style="padding: 0 20px;"><p>${body}</p></td></tr> <tr style="height: 50px; background-color: #7e827f; border-top: 2px solid #000;"><td style="padding: 0 20px;">Sent By: ${name}</td><tr></table>`,
      },
      {
        id: 2,
        email: `<table style='width: 640px; background-color: #fff; min-height: 500px; border-collapse: collapse;'><tr style="height: 75px; background-color: #7e827f;"><th>${title}</th></tr><tr><td>${body}</td></tr><tr><td>${name} is Great</td><tr></table>`,
      },
      {
        id: 3,
        email: `<table style='width: 640px; background-color: #fff; min-height: 500px; border-collapse: collapse;'><tr style="height: 50px; background-color: #7e827f;"><th>${title}</th></tr><tr><td>${body}</td></tr><tr><td>${name} is Awesome</td><tr></table>`,
      },
    ];
    
}
