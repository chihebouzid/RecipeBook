import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "../../../node_modules/@angular/Http";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() { }

  onSaveData() {
    this.dataStorageService.storeRecipies().subscribe(
      (response: Response) => {
        console.log(response);
      }
    )
  }

  onFetchData() {
    this.dataStorageService.getRecipies();
  }

  onLogout() {
    this.authService.logout();
  }
}
