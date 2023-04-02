---
id: lifecyclehook
title: Lifecycle hook
sidebar_position: 7
tags: [lifecyclehook, angular]
---

## Các lifecycle hook cơ bản trong angular

> `ngOnChanges`: Được gọi khi các giá trị đầu vào của component thay đổi.
>
> `ngOnInit`: Được gọi khi component được khởi tạo.
>
> `ngDoCheck`: Được gọi khi Angular thực hiện kiểm tra thay đổi để cập nhật view.
>
> `ngAfterContentInit`: Được gọi sau khi Angular set các giá trị vào các Content Child.
>
> `ngAfterContentChecked`: Được gọi sau khi Angular kiểm tra và cập nhật các giá trị của các Content Child.
>
> `ngAfterViewInit`: Được gọi sau khi Angular khởi tạo view của component.
>
> `ngAfterViewChecked`: Được gọi sau khi Angular kiểm tra và cập nhật view của component.
>
> `ngOnDestroy`: Được gọi khi component được xóa khỏi view hoặc đang được destroy.
>
> → Mỗi lifecycle hook cung cấp một điểm vào để thực hiện các tác vụ khác nhau trong quá trình hoạt động của một component hoặc directive. Ví dụ, `ngOnInit` là nơi tốt nhất để khởi tạo các giá trị của component, trong khi `ngOnDestroy` là nơi để giải phóng bất kỳ tài nguyên hoặc subscriptions được sử dụng bởi component.

## ngOnInit

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: ` <div>{{ message }}</div> `,
})
export class MyComponent implements OnInit {
    message: string;

    ngOnInit() {
        this.message = 'Hello World!';
    }
}
```

## ngOnChanges

```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: ` <div>{{ message }}</div> `,
})
export class MyComponent implements OnChanges {
    @Input() name: string;
    message: string;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.name) {
            this.message = `Hello ${this.name}!`;
        }
    }
}
```

## ngAfterContentInit

```typescript
import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: ` <ng-content></ng-content> `,
})
export class MyComponent implements AfterContentInit {
    @ContentChild('myContent') myContent;

    ngAfterContentInit() {
        console.log('Content initialized.');
        console.log(this.myContent.nativeElement.innerHTML);
    }
}
```

## ngAfterViewInit

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: ` <div #myDiv>Hello World!</div> `,
})
export class MyComponent implements AfterViewInit {
    @ViewChild('myDiv') myDiv: ElementRef;

    ngAfterViewInit() {
        console.log('View initialized.');
        console.log(this.myDiv.nativeElement.innerHTML);
    }
}
```

## ngOnDestroy

```typescript
import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-my-component',
    template: ` <div>Hello World!</div> `,
})
export class MyComponent implements OnDestroy {
    intervalId: number;

    constructor() {
        this.intervalId = setInterval(() => console.log('Interval'), 1000);
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}
```
