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
    if (img.includes('claude.png')) return 180;
    return 40;
  }

  groupAchievementsByCategory(achievements: any[]): { [key: string]: any[] } {
    if (!achievements) return {};
    
    const categoryOrder = [
      'Research & Publications',
      'Programming Certifications',
      'Professional Certifications',
      'Specialized Training',
      'Community & Events'
    ];

    const grouped = achievements.reduce((acc, achievement) => {
      const category = achievement.Category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(achievement);
      return acc;
    }, {});

    // Sort by the defined order
    const sortedGroups = {};
    categoryOrder.forEach(cat => {
      if (grouped[cat]) {
        sortedGroups[cat] = grouped[cat];
      }
    });

    return sortedGroups;
  }

  getCategoryKeys(groupedAchievements: { [key: string]: any[] }): string[] {
    return Object.keys(groupedAchievements);
  }

}
