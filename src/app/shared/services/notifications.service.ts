import { Injectable } from "@angular/core";
import { ToasterService, Toast } from "angular2-toaster";

@Injectable()
export class NotificationService {
  toast: Toast = {
    type: "success",
    title: "",
    body: "",
    showCloseButton: true
  };

  constructor(private toasterService: ToasterService) {}
  showSuccessMessage(title: string, message: string) {
    this.toast.type = "success";
    this.toast.title = title;
    this.toast.body = message;
    this.toasterService.pop(this.toast);
  }
}
