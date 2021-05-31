import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AdvertDetailPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1,
      }),
    ]),
    query(':enter', [style({ transform: 'scale(0)', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('400ms ease-out', style({ transform: 'scale(0)', opacity: 0 })),
      ]),
      query(':enter', [
        animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> LoginPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [
      style({ transform: 'scale(0)', opacity: 0, clipPath: 'circle(100%)' }),
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '200ms ease-out',
          style({ transform: 'scale(0)', opacity: 0, clipPath: 'circle(100%)' })
        ),
      ]),
      query(':enter', [
        animate(
          '300ms ease-out',
          style({ transform: 'scale(1)', opacity: 1, clipPath: 0 })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
