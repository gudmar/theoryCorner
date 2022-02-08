// https://blog.consdata.tech/2019/08/06/angular-onpush-strategy.html
// https://www.thinktecture.com/en/angular/whats-the-hype-onpush/

// Angular runs check detection on every ocasion. Not only on server events, Input updates or event 
// handlers calls, but also on setTimeouts, setIntervals, sometimes even on hovers.
// This is quite an expensive process. Sometimes, due to performance issues it is good to switch 
// this process off, and check for changes only when necessarry.

// onPush strategy checks for changes only if Inputs of the component change and on 
// events that occure inside the component. No setTimeouts, setIntervals.
// It checks only the reference to the given inputs, so if there is a change deep in the object passed as an input
// it will not be discovered.

// There may be only a subtree selected for an onPush change detection STRATEGY. No need to set it for the whole 
// application

// That is why there should be set object copies as input values, or changes need to be detected manualy (only on rare
// ocasions, as this is expensive)

// ngDoCheck may be used for such change detection.

// constructor(private readonly cdRef: ChangeDetectorRef) 
//  and now: cdRef.markForCheck() will make the component checked in the next cycle
// cdRef.detectChanges() will make component to be checked instantly, without waiting for the next cycle.