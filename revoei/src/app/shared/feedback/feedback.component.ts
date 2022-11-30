import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Party } from '@shared/interfaces/party';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  upVote: boolean = true;
  downVote: boolean = false;
  visible: boolean = true;

  @Input() party: Party = {
    id: 0,
    partyHouseId: 0,
    name: '',
    description: '',
    startAt: new Date(),
    endAt: undefined,
    price: 0,
    openBar: false,
    genre: '',
    upVotes: 0,
    downVotes: 0,
    stars: 0,
    photo: '../../assets/images/parties/0.jpg',
    partyHouse: {
      id: 0,
      cnpj: '',
      name: '',
      description: '',
      neighborhood: '',
      postalCode: '',
      city: '',
      fu: '',
      address: '',
      addressNumber: 0,
      addressComplement: '',
      phone: '',
      photo: '../../assets/images/parties/0.jpg'
    }
  };

  public formGroup = this.formBuilder.group({
    opinion: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
              private service: FeedbackService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  upVoteClick() {
    this.upVote = true;
    this.downVote = false;
  }

  downVoteClick() {
    this.upVote = false;
    this.downVote = true;
  }

  enviarFeedback() {
    this.spinner.show();
    let feedback: Feedback = {
      userId: parseInt(localStorage.getItem('id') ?? '0'),
      partyId: this.party.id,
      opinion: this.formGroup.get('opinion')?.value ?? '',
      upVote: this.upVote
    }
    this.service.sendFeedback(feedback).subscribe({
      next: (response: string) => {
        this.toastr.success(response);
        localStorage.setItem('feedbackEnviado', 'Sim');
      },
      error: (e) => console.error(e),
      complete: () => {
        this.party.id = 0
      }
    }).add(() => {
      this.spinner.hide();
    });
  }

  close() {
    this.visible = false;
  }
}
