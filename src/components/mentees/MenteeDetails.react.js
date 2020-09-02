import React from 'react'

const MenteeDetails = () => {
  const mentee = {
    id: '1',
    shortBio: "FullStack Engineer",
    picture: 'https://lh3.googleusercontent.com/a-/AOh14Gi2jwGU0wX6EwvyAjzaVFkz-4QrngLUz2o7fe-I',
    fullName: 'Betty K',
    longBio: "I am a software developer working with a FinTech Startup",
    role: '-fellow-',
    email: 'bettyk@e.com',
    gitHubUrl: 'bettyk',
    location: 'Lagos, Nigeria',
    joinedDate: '30th August, 2020',
    requests: [
      'I need this'
    ]
  }
  const currentUser = {
    id: '1'
  }
  return (
    <section className="content fellows">
      {mentee.role === '-fellow-' && 
      (<div className="container">
        {mentee.id === currentUser.id && mentee.requests.length &&
        <div role="alert" className="alert alert-warning clearfix">
          <span className="request-text"><strong>Hey!</strong> You have mentor request(s) from ..</span>
          {/*<mentor-request ng-repeat="(mentor_uid,mentor) in fellow.requests"> </mentor-request>*/}
        </div>}
    
        <div className="row">
          <div className="col-sm-3">
            <div className="user-wrap">
              <div className="profile-pic"><span className="f-badge purple">MNE</span><img src={mentee.picture} alt='mentee'/></div>
              <div className="user-name">
                <h5>
                  <p className="text-muted">{mentee.fullName}</p>
                </h5>
                <p className="text-muted text-wrap">{mentee.shortBio}</p>
              </div>
            </div>
            {/*<div ng-if="currentUser.role === '-mentor-' &amp;&amp; !(fellow.requests[currentUser.uid]) &amp;&amp; !(fellow.mentors[currentUser.uid])" class="user-wrap col-lg-12 messageBox"><a ng-click="showBox()" ng-show="showMessageBox" class="btn btn-success btn-block messageBox smallTopMargin"><span aria-hidden="true" class="glyphicon glyphicon-plus"></span>Send Request</a><input type="text" ng-hide="showMessageBox" ng-model="fellow.message" class="form-control input-lg messageBox smallTopMargin"/><a ng-hide="showMessageBox" ng-click="mentorConstraints()" ng-disabled="!fellow.message.length" class="btn btn-success btn-block messageBox"><span aria-hidden="true" class="glyphicon glyphicon-check"></span>Send Request</a></div>
            <div ng-if="(fellow.requests[currentUser.uid])" class="alert alert-warning">You already have a pending request with this fellow!</div>
            <div ng-if="(fellow.mentors[currentUser.uid])" class="alert alert-success">You are already mentoring this fellow!</div>*/}
          </div>
          <div className="col-sm-9 col-xs-12">
            <div className="unit-wrap bio">
              <div className="user-profile text-wrap">
                <h4>Bio</h4>
                <hr/>
                {/*<p ng-if="!fellow.longBio">No Bio yet</p>*/}
                <p>{mentee.longBio}</p>
              </div>
            </div>
            <div className="unit-wrap bio">
              <div className="user-profile">
                <h4>Profile Details</h4>
                <hr/>
                <dl className="dl-horizontal">
                  <dt>Full Name</dt>
                  <dd>{mentee.fullName}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Email</dt>
                  <dd>{mentee.email}</dd>
                </dl>
                <dl ng-show="fellow.joinedDate" className="dl-horizontal">
                  <dt>Date Joined</dt>
                  <dd>{mentee.joinedDate}</dd>
                </dl>
                <dl ng-show="fellow.gitHubUrl" className="dl-horizontal">
                  <dt>Github</dt>
                  <dd><a href={`https://github.com/${mentee.gitHubUrl}`} target="_blank">{mentee.gitHubUrl}</a></dd>
                </dl>
                <dl ng-show="fellow.location" className="dl-horizontal">
                  <dt>Location</dt>
                  <dd>{mentee.location}</dd>
                </dl>
                {/*<dl ng-show="fellow.level" class="dl-horizontal">
                  <dt>Level</dt>
                  <dd><span ng-style="{'background-color': level.color}" class="label label-success">{{level.name}}</span></dd>
                </dl>*/}
              </div>
            </div>
            {mentee.videoUrl && <div class="unit-wrap bio">
              <h4>{mentee.fullName}'s Story</h4>
              <div class="text-center">
                {/*<video data-ng-src="{{scePermit(fellow.videoUrl)}}" height="300" width="400" controls="controls"></video>*/}
              </div>
            </div>}
            {/*<div ng-if="fellow.plumBadges" class="unit-wrap bio">
              <div class="user-profile">
                <h4>Plum Profile</h4>
                <hr/>
                <div class="row">
                  <div ng-repeat="badge in fellow.plumBadges" class="col-md-2"><img ng-src="{{badge}}" height="96"/></div>
                </div>
              </div>
            </div>
            <div ng-if="fellow.badges" class="unit-wrap bio">
              <div class="user-profile">
                <h4>Smarterer Badges</h4>
                <hr/>
                <div ng-repeat="badge in fellow.badges" class="row smarterer">
                  <div class="col-md-12">
                    <h5><span>{{badge.quiz.name}}</span>&nbsp;<span ng-bind="badge.badge.score" class="smarterer-score"></span></h5>
                    <md-progress-linear md-mode="buffer" value="{{badge.badge.percentile}}" class="md-warn"></md-progress-linear>
                  </div>
                </div>
              </div>
            </div>*/}
            {/*<div ng-if="currentUser.uid === fellow.uid &amp;&amp; fellow.mentors" class="unit-wrap bio">
              <div class="user-profile">
                <h4>My Mentors</h4>
                <hr/>
                <div class="row">
                  <my-connections info="mentor" ng-repeat="(user_id,user) in fellow.mentors"></my-connections>
                </div>
              </div>
            </div>
            <div class="row">
              <div ng-click="confirmation(sm)" ng-if="currentUser.isAdmin" class="col-md-2 btn btn-danger delete pull-right">Delete User</div>
            </div>*/}
          </div>
        </div>
        </div>)}
    </section>
  )
}

export default MenteeDetails