import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

  getImageWidth(img: string): number {

  if (!img) return 40;

  if (img.includes('nasscom.png')) return 100;
  if (img.includes('hackerrank.png')) return 150;
  if (img.includes('gdg.svg')) return 250;
  if (img.includes('sansad.jpg')) return 100;
  if (img.includes('NIT.jpg')) return 60;
  if (img.includes('ITDP.png')) return 100;
  if (img.includes('databricks.svg')) return 200;

  return 40;
}

}
