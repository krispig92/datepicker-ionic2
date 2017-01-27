export const datepicker_style =
  `
    .datepicker - content {
      overflow: auto
    }

.visible - overflow {
  overflow: visible
}

    .center {
  text - align: center
}

.bold {
  font - weight: 700
}

.datepicker - day - of - month,
.datepicker - month,
.datepicker - year {
  margin - top: 10px;
  margin - bottom: 10px;
  color: #fff;
  cursor: pointer
}

.datepicker - selection {
  cursor: pointer;
}

.datepicker - month,
.datepicker - year {
  font - size: 14px
}

.datepicker - day - of - month {
  font - size: 60px;
  font - weight: 700
}

.datepicker - balanced {
  background - color: #008d7f
}

.white {
  color: #fff
}

.datepicker - balanced - light {
  background - color: #009688
}

.datepicker - color - balanced - light {
  color: #009688
}

.datepicker - date - col:hover {
  background - color: rgba(56, 126, 245, .5);
  cursor: pointer;
  border - radius: 20px;
}

.no - padding {
  padding: 0
}

.datepicker - date - cell {
  padding: 5px
}

.datepicker - selected {
  background - color: rgba(182, 217, 214, 1);
  border - radius:20px;
}

.datepicker - current {
  color: rgba(60, 170, 159, 1);
  border - radius:20px;
}

.datepicker - disabled {
  color: rgba(170, 170, 170, 1)
}

.datepicker - disabled:hover {
  background - color: transparent;
  cursor: default
}

.datepicker - modal - container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  -webkit - box - pack: center;
  -ms - flex - pack: center;
  -webkit - justify - content: center;
  -moz - justify - content: center;
  justify - content: center;
  -webkit - box - align: center;
  -ms - flex - align: center;
  -webkit - align - items: center;
  -moz - align - items: center;
  align - items: center;
  z - index: 12
}

.datepicker - modal - container.datepicker - modal {
  width: 250px;
  max - width: 100 %;
  max - height: 100 %;
  border - radius: 0;
  background - color: rgba(255, 255, 255, .9);
  display: flex;
  -webkit - box - direction: normal;
  -webkit - box - orient: vertical;
  -webkit - flex - direction: column;
  -moz - flex - direction: column;
  -ms - flex - direction: column;
  flex - direction: column
}

.datepicker - modal {
  box - shadow: 1px 1px 3px #888
}

.datepicker - modal - head {
  padding: 8px 10px;
  text - align: center
}

.datepicker - modal - title {
  margin: 0;
  padding: 0;
  font - size: 13px
}

.datepicker - modal - buttons {
  padding - top: 10 %;
  display: -webkit - box;
  display: -webkit - flex;
  display: -moz - box;
  display: -moz - flex;
  display: -ms - flexbox;
  display: flex;
  -webkit - box - direction: normal;
  -webkit - box - orient: horizontal;
  -webkit - flex - direction: row;
  -moz - flex - direction: row;
  -ms - flex - direction: row;
  flex - direction: row;
  padding: 10px;
  min - height: 65px;
  font - size: 12px;
  font - weight: 700
}

.datepicker - modal - buttons.button {
  -webkit - box - flex: 1;
  -webkit - flex: 1;
  -moz - box - flex: 1;
  -moz - flex: 1;
  -ms - flex: 1;
  flex: 1;
  display: block;
  min - height: 45px;
  border - radius: 2px;
  line - height: 20px;
  margin - right: 5px
}

.datepicker - modal - buttons.button:last - child {
  margin - right: 0
}

.datepicker - calendar {
  word - wrap: normal;
}

.calendar - row {
  padding - top: 15px;
  padding - bottom: 15px;
  display: flex;
  justify - content: space - around;
}

.calendar - cell {
  height: 25px;
  width: 25px;
}
`;