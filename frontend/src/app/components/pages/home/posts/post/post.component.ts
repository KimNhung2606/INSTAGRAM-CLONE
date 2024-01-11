import { Component, Input } from '@angular/core';
import { Post } from 'src/app/inter/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input() post!:Post;
}
