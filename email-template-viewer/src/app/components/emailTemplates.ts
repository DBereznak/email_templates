
export default function emailMarkup(name: string) {
    return [
        {id: 1, email: "<table><tr><th>Title</th><tr><tr><td>This is a test template</td><tr></table>"},
        {id: 2, email: `<table><tr><th>Title</th><tr><tr><td>This is a second test template</td><tr><tr><td>${name} is Great</td><tr></table>`},
        {id: 3, email: `<table><tr><th>Title</th><tr><tr><td>This is a third test template</td><tr><tr><td>${name} is Awesome</td><tr></table>`},
    ];
    
}
