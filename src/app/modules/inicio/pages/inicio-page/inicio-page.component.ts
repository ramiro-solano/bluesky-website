import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent implements OnInit{
  logosCompany = [
    { ruta: "../../../../../assets/company-logos/samsung-logo.svg",
      name: "samsung-logo" 
    },
    { ruta: "../../../../../assets/company-logos/motorola-logo.svg",
      name: "motorola-logo" 
    },
    { ruta: "../../../../../assets/company-logos/apple-logo.svg",
      name: "apple-logo" 
    },
    { ruta: "../../../../../assets/company-logos/xiaomi-logo.svg",
      name: "xiaomi-logo" 
    },
    { ruta: "../../../../../assets/company-logos/huawei-logo.svg",
      name: "huawei-logo" 
    },
    { ruta: "../../../../../assets/company-logos/lg-logo.svg",
      name: "lg-logo" 
    },
    { ruta: "../../../../../assets/company-logos/nokia-logo.svg",
      name: "nokia-logo" 
    }
  ];

  scrollToSection(): void {
    document.getElementById("servicios")?.scrollIntoView({behavior:'smooth'})
  }

  sendWhatsApp(){
    const input = document.getElementById('inputWhatsapp') as HTMLInputElement;
    const whatsappLink = document.getElementById('whatsappLink') as HTMLAnchorElement;

    const message = input.value;
    const numberPhone = +5493812116637;
    whatsappLink.href = `https://api.whatsapp.com/send?phone=${numberPhone}&text=${encodeURIComponent(message)}`
  }

  ngOnInit(): void {
    
  }
}
