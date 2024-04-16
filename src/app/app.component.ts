import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BookService } from "./shared/books.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "katio_ui";

  names: String[] = [];

  constructor(private bookService: BookService) {}
  fetchBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (data: any[]) => {
        data.forEach((item: any) => {
          this.names.push(item.name);
        });
      },
    });
  }
}
